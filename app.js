const express = require("express");
const collection = require("./mongo");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
  origin: 'http://localhost:3000', // replace with your React app's URL
  credentials: true
}));


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



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
      res.status(500).json({ message: "Error creating user", error: error.message });
    }
  });
  

app.post("/api/auth/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await collection.findOne({ email: email, password: password });
      if (user) {
        res.json({ success: true, message: "Login successful" });
      } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
      }
    } catch (e) {
      res.status(500).json({ success: false, message: "Server error" });
    }
  });

app.listen(8000,()=>{
    console.log("port connected");
})
