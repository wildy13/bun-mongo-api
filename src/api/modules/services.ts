import { ModuleModel } from "./model";
import type { Module } from "./types";

export async function getModules() {
    return ModuleModel.find().lean();
}

export async function getModule(id: string) {
    return ModuleModel.findById(id).lean();
}

export async function createModule(data: Partial<Module>) {
    const module = new ModuleModel(data);
    return module.save();
}

export async function updateModule(id: string, data: Partial<Module>) {
    return ModuleModel.findByIdAndUpdate(id, data, { new: true }).lean();
}

export async function deleteModule(id: string) {
    const res = await ModuleModel.findByIdAndDelete(id);
    return res !== null;
}
