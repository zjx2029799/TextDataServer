var express = require('express');
var app = express();
var path = require('path');


//using express needed cite in node_modules
app.use("/node_modules", express.static(__dirname+ "/node_modules"));

//acquire the files in the root dir
app.use("/", express.static(__dirname + "/"));


/*app.get("/", function (req, res) {
    //res.send("hello wordld")
    res.sendFile("test.txt", {root: path.join(__dirname, './')})
})*/

app.listen(3000);