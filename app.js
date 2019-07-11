var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, process.env.IP, function(){
    console.log("Blog App Server is running!");
});