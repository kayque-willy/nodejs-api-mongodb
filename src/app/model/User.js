const mongoose = require("mongoose");

const User = mongoose.Schema(
    {
        name: { type: String, require: true },
        type: { type: String, require: true },
        password: { type: String, require: true },
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("user", User);