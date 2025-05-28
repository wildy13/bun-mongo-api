import mongoose from "mongoose";
import { nanoid } from "nanoid";

const ModuleSchema = new mongoose.Schema({
    _id: { type: String, default: () => nanoid(10) },
    number: { type: String, required: true, unique: true },
    name: { type: String, required: true, unique: true },
    version: { type: Number, required: true },
    url: { type: String, required: true },
});

export const ModuleModel = mongoose.model("Modules", ModuleSchema);
