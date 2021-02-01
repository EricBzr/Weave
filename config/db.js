const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("MongoDB Successfully Connected...");
    } catch(err) {
        console.error(err.message);
        // Exit process/application with exit code for failure
        process.exit(1);
    }
}

module.exports = connectDB;