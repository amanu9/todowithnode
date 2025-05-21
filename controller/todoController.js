const Todo=require("../models/Todo");
const moment=require("moment");


const homeController=async(req,res,next)=>{
    try{
      const todos= await Todo.find({}).sort({createdAt:-1})
res.locals.amanMoment=moment// for date convertion
res.render("index",{ title: "Home",todos })
    }
    catch(error){
        res.status(500).json({message:error.message});

    }
  }
  // add to do controller
  const addtodocontroller=(req,res,next)=>{
    try{
res.render("newTodo",{title:"add-todo"},)
    }
    catch(error){
        res.status(500).json({message:error.message});

    }
  }
  // update to do controller
  const updateTodocontroller= async(req,res,next)=>{
    try{
        const {id}=req.query;
        const todo=await Todo.findById(id)

res.render('update',{title:"update-todo",todo})
    }catch(error){
      res.status(500).json({message:error.message});

    }
  }
  // delete to do controller
  const deleteTodocontroller=(req,res)=>{
    try{
res.render('deleteTodo',{title:"delete-todo"},)
    }catch(error){
      res.status(500).json({message:error.message});

    }
  }
  // add to do to db
  const addTodoTodbcontroller=async (req, res) => {
  try {
    const { title, desc } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: "title is required" });
    }
    
    const newTodo = new Todo({ title, desc }); // Add 'new' keyword
    await newTodo.save();
    res.redirect("/");
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}


  module.exports={homeController,addtodocontroller,updateTodocontroller,deleteTodocontroller,addTodoTodbcontroller}