//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const request = require("request");
const https = require("https");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

// mongoose.connect("mongodb://localhost:27017/<DB Name>", {useNewUrlParser:true});


app.get("/",function(req,res){
    res.render("home");
  });

app.get("/allswags",function(req,res){
  res.render("swags")
});

app.get("/about",function(req,res){
  res.render("about")
});

app.get("/products", function(req,res){
  res.render("products")
});



app.listen(3000, function() {
    console.log("Server started on port 3000");
  });