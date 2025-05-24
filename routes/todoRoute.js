
const express=require("express");
const router=express.Router();// to use routes
const todo=require("../controller/todoController");


router.get("/",todo.homeController);// using controller on our routes

  // add todo
  router.get("/add-todo",todo.addtodocontroller);

  //update
router.get("/update-todo", todo.updateTodoFormController);
  // delete
    router.get("/delete-todo",todo.deleteTodoPageController);

router.get("/confirm-delete", todo.deleteTodocontroller);
  //add post
 router.post("/add-todo", todo.addTodoTodbcontroller);
 router.post("/update-todo/:id", todo.updateTodoController);
 

  module.exports=router// to use ather place we have to export it