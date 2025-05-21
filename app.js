const express = require("express");
const bodyParser = require("body-parser");// to parse url body part
const connectionMongoose=require("./init/connection")// importing the connection
const todoRoute=require("./routes/todoRoute");
const dotenv=require("dotenv")

dotenv.config(); // to use the enviroment variable
console.log(process.env.NAME);
// init app
const app = express();
connectionMongoose();// calleding the connection above

// middle ware
// VIEW ENGINE 
app.set("view engine", "ejs");
// body parser
app.use(bodyParser.urlencoded({extended:true}))//Parses URL-encoded data (the default format browsers use when submitting forms)
app.use("",todoRoute)
// end of middle ware

module.exports=app;
  

