const mongoose = require('mongoose');
const UserSchema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');
const User = new UserSchema({
    //name: {type: String, required: true},
    //lastname: {type: String, required: true},
    //email: {type: String, required: true, unique: true},
    //password: {},
    //password: String,
    //coins: {type: Number, min: 0}
})
User.plugin(passportLocalMongoose);
//const User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', User);