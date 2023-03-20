 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const formSchema = new Schema({
  fullname : String,
  number : String,
  email : String,
  // to add country
  title : String,
  subject : String,
});
 
// Create a model based on that schema
const Article = mongoose.model("Article", formSchema);
 
 // export the model
module.exports = Article; 