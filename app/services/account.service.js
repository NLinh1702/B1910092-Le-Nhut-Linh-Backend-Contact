const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/contactbook');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    username: String,
    password: String 
},{
    collection: 'account'
})

const AccountModel = mongoose.model('acount', AccountSchema);
module.exports = AccountModel;