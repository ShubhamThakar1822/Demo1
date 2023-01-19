var  express=require("express");
var app=express();
app.get("/",function(req,resp){
    resp.send("Ok Guys ");
})
app.listen(7000);
console.log("server is ONNNNN")
