const mongoose = require("mongoose");

const conectDB = async () => {
    try {

        const connect = await mongoose.connect(process.env.MONGODB_URL);
        if(connect) {

            console.log('connection done');
        }else{
          console.log('failed to connect');
          
        }
         
        
    } catch(err) {
           console.log('error found ', err);
    }

}
module.exports = conectDB