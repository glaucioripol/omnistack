const { Schema, model } = require("mongoose");

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: String,
    bio: String,
    avatar: {
        type: String,
        required: true
    },
    like: [{
        type: Schema.Types.ObjectId,
        ref: "Dev",
    }],
    deslikes: [{
        type: Schema.Types.ObjectId,
        ref: "Dev",
    }],
}, {
        timestamps: true
    });

module.exports = model("Dev", DevSchema);