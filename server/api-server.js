const express = require("express");
const port = "4000";
const app = express();
const myApi = require("./index.route");



app.use("/api",myApi);
app.listen(port,()=>{
    console.log("Your api server is running on port " + port);
});