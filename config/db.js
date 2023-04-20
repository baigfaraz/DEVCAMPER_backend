const mongoose = require('mongoose');
// const dotenv = require('dotenv');
// dotenv.config({ path: './config/.env' });

// const connectDB = async () => {
//     const conn = await mongoose.connect(
//         process.env.MONGO_URI
//         , {
//         useNewUrlParser: true,
//         // useCreateIndex: true,
//         // useFindAndModify: false,
//         useUnifiedTopology: true
//     }
//     );
    
    // console.log(`MongoDB Connected: ${conn.connection.host}`);
//     }


// module.exports = connectDB;


const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        
    })
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    console.log('MongoDB connected you are good to GO!'.cyan.underline.bold);
  } catch (error) {
    console.error(`Error:${error.message}`)
    process.exit(1)
  }
}

// export default connectDB;
module.exports = connectDB
