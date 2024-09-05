const mongoose = require('mongoose');
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/react-login-tut";

mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    // Add this check
    mongoose.connection.db.admin().ping((error, result) => {
      if (error) {
        console.log('MongoDB ping failed:', error);
      } else {
        console.log('MongoDB ping successful');
      }
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed:', err);
  });



const newSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    }
  });

const collection = mongoose.model("collection",newSchema)

module.exports=collection