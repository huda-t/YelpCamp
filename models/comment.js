var mongoose = require("mongoose");
 
var commentSchema = new mongoose.Schema({
    text: String,
    author: { //we could save the whole User object but then
    //we'd also be saving the whole password hash - no fun
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }
});
 
module.exports = mongoose.model("Comment", commentSchema);