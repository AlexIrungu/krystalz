require('dotenv').config();
const express = require("express");
const cors = require('cors');
const jwt = require('jsonwebtoken');
const axios = require('axios');
const collection = require("./mongo");
const app = express();

// M-Pesa Configuration
const CONSUMER_KEY = process.env.MPESA_CONSUMER_KEY;
const CONSUMER_SECRET = process.env.MPESA_CONSUMER_SECRET;
const BUSINESS_SHORT_CODE = process.env.MPESA_SHORTCODE;
const PASSKEY = process.env.MPESA_PASSKEY;
const CALLBACK_URL = process.env.MPESA_CALLBACK_URL;

// M-Pesa endpoints
const OAUTH_TOKEN_URL = "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials";
const STK_PUSH_URL = "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

// JWT Configuration
const JWT_SECRET = process.env.JWT_SECRET || 'ecb499aa4645ff6f9624ac9d19a2b4a3957d3d02487a4cb5fc7ca0f806fd4ea26909443532323964c3f5c253e3a4c89dfd5970b051cd8a8e3f0002e2738ebcd4';
const JWT_EXPIRY = '7d';

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: [
    'https://alexirungu.github.io',
    'https://alexirungu.github.io/krystalz',
    'http://localhost:3000'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`, req.body);
  next();
});

// Test route to verify server is running
app.get('/api/test', (req, res) => {
  res.json({ message: 'Server is running' });
});


// Helper function to get M-Pesa OAuth token
async function getOAuthToken() {
  try {
    const auth = Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
    const response = await axios.get(OAUTH_TOKEN_URL, {
      headers: {
        "Authorization": `Basic ${auth}`
      }
    });
    console.log('OAuth Token Response:', response.data);
    return response.data.access_token;
  } catch (error) {
    console.error("Error getting OAuth token:", error.response?.data || error.message);
    throw error;
  }
}

// JWT Authentication Middleware
const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid or expired token' });
  }
};

// 3. Modify the STK Push endpoint
app.post("/api/mpesa/stkpush", async (req, res) => {
  console.log('Received STK push request:', req.body);
  try {
    const { phoneNumber, amount } = req.body;
    
    if (!phoneNumber || !amount) {
      return res.status(400).json({
        success: false,
        message: "Phone number and amount are required"
      });
    }

    // Format phone number if needed
    const formattedPhone = phoneNumber.replace(/^0/, '254').replace(/\+/, '');
    
    // Get OAuth token
    const token = await getOAuthToken();
    
    // Generate password
    const timestamp = new Date().toISOString().replace(/[^0-9]/g, '').slice(0, -3);
    const password = Buffer.from(
      `${BUSINESS_SHORT_CODE}${PASSKEY}${timestamp}`
    ).toString('base64');

    // Prepare STK Push request
    const stkPushRequest = {
      BusinessShortCode: BUSINESS_SHORT_CODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: Math.round(amount),
      PartyA: formattedPhone,
      PartyB: BUSINESS_SHORT_CODE,
      PhoneNumber: formattedPhone,
      CallBackURL: CALLBACK_URL,
      AccountReference: "Luna Shop",
      TransactionDesc: "Payment for items"
    };

    console.log('STK Push Request:', stkPushRequest);

    const response = await axios.post(
      STK_PUSH_URL,
      stkPushRequest,
      {
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json"
        }
      }
    );

    console.log('M-Pesa API Response:', response.data);

    res.json({
      success: true,
      data: response.data
    });
  } catch (error) {
    console.error("M-Pesa API error:", error.response?.data || error.message);
    res.status(500).json({
      success: false,
      message: "Failed to initiate M-Pesa payment",
      error: error.response?.data || error.message
    });
  }
});

// M-Pesa callback endpoint
app.post("/api/mpesa/callback", (req, res) => {
  console.log("M-Pesa callback received:", req.body);
  
  // Handle the callback data here
  // You might want to update your database or trigger other actions
  
  res.json({
    ResultCode: 0,
    ResultDesc: "Success"
  });
});


// Routes
app.post("/api/auth/signup", async (req, res) => {
  const { name, email, password } = req.body;
  
  try {
    const existingUser = await collection.findOne({ email: email });
    
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    
    const newUser = new collection({
      name,
      email,
      password // Remember: In a real application, you should hash this password
    });
    
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );
    
    res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    console.log("Login attempt for email:", email); // Log the incoming request
    
    const user = await collection.findOne({ email: email });
    if (!user || user.password !== password) { // Use proper password comparison in production
      console.log("Invalid credentials for email:", email);
      return res.status(401).json({
        success: false,
        message: "Invalid email or password"
      });
    }

     // Generate JWT token
     const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );
    
    console.log("Login successful for email:", email);
    res.json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});

app.get("/api/auth/verify", authenticateToken, async (req, res) => {
  try {
    const user = await collection.findById(req.user.userId).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    
    // Generate new token to extend session
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY }
    );
    
    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    });
  } catch (error) {
    console.error("Verification error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.post("/api/auth/logout", authenticateToken, (req, res) => {
  res.json({ message: "Logged out successfully" });
});

// Get users route (protected)
app.get("/api/auth/users", authenticateToken, async (req, res) => {
  try {
    const users = await collection.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error fetching users", error: error.message });
  }
});

// Start server
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log('Environment variables loaded:', {
    CONSUMER_KEY: CONSUMER_KEY ? 'Set' : 'Not set',
    CONSUMER_SECRET: CONSUMER_SECRET ? 'Set' : 'Not set',
    BUSINESS_SHORT_CODE: BUSINESS_SHORT_CODE ? 'Set' : 'Not set',
    CALLBACK_URL: CALLBACK_URL ? 'Set' : 'Not set'
  });
});