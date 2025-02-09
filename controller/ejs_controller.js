const User = require('../models/user_model')

const ejs_find = async(rollnumber) => {
    try {
      if (isNaN(rollnumber) || rollnumber === null || rollnumber === undefined) {
       return false
      }
   
      const find = await User.findOne({rollNumber: rollnumber});
    //   console.log(find);
      if (find === null || find === undefined) {
      return false
      } 

   
          return find
       } catch(err) {
        console.log("error catch : ", err);
        
           return false
       }
}


module.exports = ejs_find