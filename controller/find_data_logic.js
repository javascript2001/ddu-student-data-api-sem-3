// const mongoose = require('mongoose')
const User = require('../models/user_model')
const finder = async (req, res) => {
  
    try {
     const rollnumber = req.params.rollnumber;
   if (isNaN(rollnumber) || rollnumber === null || rollnumber === undefined) {
    return res.send("check your parameter and try again")
   }

   const find = await User.findOne({rollNumber: req.params.rollnumber});
   console.log(find);
   if (find === null || find === undefined) {
   return res.send("no data found")
   } 
//    else {

       res.json({
           name: find.name,
           rollnumber: find.rollNumber,
           id: find.id
        })
    // }
    } catch(err) {
        res.send("problem in server, try again later")
    }
}
module.exports = finder