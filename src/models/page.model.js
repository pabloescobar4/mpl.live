const { Schema, model } = require("mongoose");

const pageSchema = new Schema({
    name: { type: String, required: true },
    banner: { type: Object, required: true },
    about: { type: Object, required: true },
    features: { type: Object, required: true },
    how_download: { type: Object, required: true },
    how_play: { type: Object, required: true },
    tips_to_play: { type: Object, required: true },
    why_play: { type: Object, required: true },
    FAQs: { type: Object, required: true }
}, {
    versionKey: false,
    timestamps: true,
});

module.exports = model("page", pageSchema);