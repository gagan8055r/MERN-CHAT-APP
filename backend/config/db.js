const mongoose = require('mongoose');

const connectDB=async()=>{

    try{

        const con=await mongoose.connect("mongodb+srv://gagan8055r:8g168IkonJCm26fM@cluster0.togvadd.mongodb.net/?retryWrites=true&w=majority",{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            // useFindAndModify:true,
        })

        console.log(`MongoDb is connnected ${con.connection.host}`);
    }
    catch(err)
    {
          console.log(`Error :${error.message}`);

          process.exit()
    }


}

module.exports=connectDB
