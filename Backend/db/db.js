const mongoose =   require('mongoose');

function connectDB() {
    console.log('Trying to connect to:', process.env.DB_CONNECT); 
   mongoose.connect(process.env.DB_CONNECT, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('DB connected');
    })
    .catch((err) => { 
        console.error(err);
    }); 
}

module.exports = connectDB;