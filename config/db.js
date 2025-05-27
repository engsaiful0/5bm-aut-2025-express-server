const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Use environment variable for MongoDB connection string if available
const MONGODB_URI = process.env.MONGODB_URI || 
  'mongodb+srv://bijoylabbd:gIPHp0duVv79HMMl@cluster0.endmxko.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

// ✅ Modern, clean connection
mongoose.connect(MONGODB_URI)
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

module.exports = mongoose;
