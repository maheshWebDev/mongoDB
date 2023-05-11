const User = require('../model/user');

module.exports.addUser = async(req,res)=>{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        const user = new User(name,email,password);
      const doc = await  user.insertUser();
      res.status(200).json({"status":"success",data:{data:doc}});
    } catch (error) {
        res.status(404).json({"err":error.message});
    }
}

module.exports.findUserbyID = async(req,res)=>{
    try {
        const id = req.params.id;
        console.log(id)
       const user = await User.findUserbyID(id);
       console.log(user)
       res.status(200).json({status:"success",data:{user}});
    } catch (error) {
        res.status(404).json({"err":error.message});
    }
}