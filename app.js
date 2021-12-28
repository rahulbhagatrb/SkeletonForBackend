//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

//connecting database with our server 
mongoose.connect("mongodb://localhost:27017/wikiDB",{useNewUrlParser:true});

//creating  Schema for daatabase collections(basically skeleton of content of database)
const titleSchema={
  title: string,
  content:String
};

//creating model/documents for database collections
const Title=mongoose.model("title",titleSchema);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
