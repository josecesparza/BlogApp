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

// Blog.create({
//     title: "Test Blog",
//     image: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
//     body: "HEllo this is a Blog Post!"
// });

//RESTFUL ROUTES

app.get("/", function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res){
    res.render("index");
});

app.listen(3000, process.env.IP, function(){
    console.log("Blog App Server is running!");
});