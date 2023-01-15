require('dotenv').config();

const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// routes
const authRoutes = require('./routes/auth');

app.use('/api/auth', authRoutes);

const brandRoutes = require('./routes/brands');

app.use('/api/brands', brandRoutes);

const apiRoutes = require('./routes/api');

app.use('/api', apiRoutes);

app.listen(process.env.PORT, () => {
  console.log('Server started on PORT 1337');
});

const uri = process.env.MONGO_URI;

async function connectionToDatabase() {
  try {
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error(error);
  }
}
connectionToDatabase();
