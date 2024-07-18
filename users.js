const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true }
}, { collection: 'Users' });

const User = mongoose.model('User', userSchema);
console.log(User.length);
module.exports = User;
