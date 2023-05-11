const Product = require('../model/product');

module.exports.addProduct = async(req,res)=>{
    try {
        const title = req.body.title;
        const price = req.body.price;
        const description = req.body.description;
        const product = new Product(title,price,description);
        await product.save()
       res.status(200).json({"status":"success","message":"inserted"});
    } catch (error) {
        res.status(404).json({"error":error.message});
    }
}

module.exports.getProducts = async(req,res)=>{
    try {
      const data = await Product.fetchAll();
      
      res.status(200).json({"status":"success",data:{data}});
    } catch (error) {
        res.status(404).json({"error":error.message});
    }
}

module.exports.getOneProduct = async(req,res)=>{
    try {
        let id = req.params.id;

       
       let data = await Product.fetchById(id);
       res.status(200).json({status:"success",data:{data}});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

module.exports.updateProducts = async(req,res)=>{

    try {
        const id = req.params.id
        const product = await  Product.update(id,req.body)
        res.status(200).json({status:"success",data:{product}});
        
    } catch (error) {
        res.status(404).json({message:error.message});
    }
   
}

module.exports.deleteProduct = async(req,res)=>{
    try {
        let id = req.params.id;
      let res = await  Product.delete(id);
      res.status(200).json({"status":"success",message:"deleted"});
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}