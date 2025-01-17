const mongoose = require('mongoose');

// Get MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('MONGODB_URI is not defined in environment variables');
  process.exit(1);
}

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
  // Ping database to verify connection
  mongoose.connection.db.admin().ping((error, result) => {
    if (error) {
      console.log('MongoDB ping failed:', error);
    } else {
      console.log('MongoDB ping successful');
    }
  });
})
.catch((err) => {
  console.error('MongoDB connection failed:', err);
  process.exit(1);
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

const collection = mongoose.model("collection", newSchema);

module.exports = collection;