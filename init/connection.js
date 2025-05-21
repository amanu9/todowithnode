const mongoose = require("mongoose");



const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection error:", error.message);
    process.exit(1); // Exit with failure
  }
};

module.exports = connectMongodb; // CommonJS export