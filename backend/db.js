// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/";

// const connectToMongo = async () => {
//     await mongoose.connect(mongoURI)
//         .then(() => console.log("Connected to Mongo successfully"))
//         .catch(err => console.log("Failed to connect to Mongo:", err));
// };

// module.exports = connectToMongo;


const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/";

const connectToMongo = async () => {
    await mongoose.connect(mongoURI)
        .then(() => console.log("Connected to Mongo successfully"))
        .catch(err => console.log("Failed to connect to Mongo:", err));
};

module.exports = connectToMongo;
