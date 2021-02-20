const mongoose = require("mongoose");

const ConsultSchema = new mongoose.Schema({
    telephone: { type: String },
    name: { type: String },
    origin: { type: String },
    content: { type: String }
})

const ConsultModel = mongoose.model("Consult", ConsultSchema);
export default ConsultModel;