const mongoose = require("mongoose");
const colors = require("colors");
const dotenv = require("dotenv");

// ENV File Configuration
dotenv.config();

const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connection Successfully: ${mongoose.connection.host}`.bgGreen.green);
    } catch (error) {
        console.log(`Mongo Server Issue: ${error}`.red);
    }
};

module.exports = { ConnectDB };
