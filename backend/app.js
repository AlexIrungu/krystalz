require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const collection = require("./mongo");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    const allowedOrigins = [
      process.env.FRONTEND_URL,
      `${process.env.FRONTEND_URL}/krystalz`,
      'https://alexirungu.github.io',
      'http://localhost:3000', // Add this for local development
      'https://alexirungu.github.io/krystalz/' // Add this if your app is hosted at this specific path
    ];
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

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
    
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await collection.findOne({ email: email });
    if (!user) {
      return res.status(401).json({ success: false, message: "User not found" });
    }
    if (user.password !== password) {  // Note: In production, use proper password hashing
      return res.status(401).json({ success: false, message: "Incorrect password" });
    }
    res.json({ success: true, message: "Login successful" });
  } catch (e) {
    console.error("Login error:", e);
    res.status(500).json({ success: false, message: "Server error", error: e.message });
  }
});

// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});