 const mongoose=require("mongoose");
 // database schema
  const todoScema=mongoose.Schema(
    {
      title:{type:String,required:true,unique:true,maxlength:30,minlength:5,trim:true},
      desc:{type:String,required:true}
      
    },{timestamps:true}
  )
  
  const Todo=mongoose.model("todo",todoScema);

  module.exports=Todo // we export it to use in the other part