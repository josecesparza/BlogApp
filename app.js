var bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    express = require('express'),
    app = express();

mongoose.connect("mongodb://localhost:27017/blog_app", { useNewUrlParser: true });