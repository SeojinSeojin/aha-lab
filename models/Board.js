const mongoose = require("mongoose");

const BoardSchema = new mongoose.Schema({
    url: { type: String },
    comment: { type: String }
})

const BoardModel = mongoose.model("Board", BoardSchema);
export default BoardModel;