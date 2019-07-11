var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

//APP CONFIG
mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES

app.listen(3000, process.env.IP, function(){
    console.log("Blog App Server is running!");
});