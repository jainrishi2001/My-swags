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


// Database
mongoose.connect("mongodb://localhost:27017/SwagsDB", {useNewUrlParser:true});  //You can also use your own DB name instead of SwagsDB that you want to create
const swagsSchema = {
  name: String,
  title: String,
  description: String,
  bimage: String,
  fimage: String
};

const Swag = mongoose.model("Swag",swagsSchema);

// First entry into the schema
// const flowIndia = new Swag({
//   name: "flow-india",
//   title: "Flow India Tshirt",
//   description: "T-shirt received through giveaway by Flow Blockchain with the awesome design behind and printed with the words 'Build, Code, Flow'. "
// });

// flowIndia.save();

app.get("/allswags/:swagName", async function(req,res){
  const swagName = _.kebabCase(req.params.swagName);
  var findSwag = async function (s){
    return await Swag.findOne({name: s});
  };
  const foundSwag = await findSwag(swagName);
  if(foundSwag){
    res.render("products",{title: foundSwag.title, description: foundSwag.description, fimage: foundSwag.fimage, bimage: foundSwag.bimage});
  }else {
    res.send("Sorry the page you requested doesn't exist");
  };

});



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