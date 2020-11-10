var mongoose = require("mongoose");
var userSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    phone: String,
    email: String,
    phone: String,
    video: String,
    street: String,
    street2: String,
    city: String,
    state: String,
    zip: String,
  },
  { collection: "user" }
);

module.exports = userSchema;
