let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let SomethingSchema = new Schema(
    {
        something: String
    }
);

module.exports = mongoose.model('Something',SomethingSchema);