const express=require("express");

const PORT=8000;

// init app
const app=express();

// VIEW ENGINE
app.set("view engine", "ejs");

app.listen(PORT,()=>{
    console.log('server running on port ',{PORT});
})