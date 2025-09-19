const mongoose = require('mongoose')

const UserSchema= new mongoose.Schema({
    username:{tyepe:String, require:true , unique: true},
    password:{ type:String, required:true }
})

module.exports = mongoose.model('User', UserSchema)

