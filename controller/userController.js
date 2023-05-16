const User = require('../model/user');

module.exports.addUser = async(req,res)=>{
    try {
       console.log(req.body)
      const doc = await  User.create(req.body)
      res.status(200).json({"status":"success",data:{data:doc}});
    } catch (error) {
        res.status(404).json({"err":error.message});
    }
}

module.exports.findUserbyID = async(req,res)=>{
    try {
        const id = req.params.id;
       
       const user = await User.findById(id);
       console.log(user)
       res.status(200).json({status:"success",data:{user}});
    } catch (error) {
        res.status(404).json({"err":error.message});
    }
}