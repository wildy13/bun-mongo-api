import * as moduleService from "./services";
import type { Module } from "./types";
import mongoose from 'mongoose';

export async function getModules(): Promise<Response> {
    const modules = await moduleService.getModules();
    return Response.json(modules);
}

export async function getModuleById(id: string): Promise<Response> {
    const module = await moduleService.getModule(id);
    if (!module) {
        return new Response("Module not found", { status: 404 });
    }
    return Response.json(module);
}

export async function createModule(req: Request): Promise<Response> {
    try {
        type ModuleInput = Partial<Module>;
        const data: ModuleInput = await req.json() as ModuleInput;

        //console.log(typeof data.version, data);
        //return new Response('berhasil', { status: 201 });
        const newModels = await moduleService.createModule(data);
        return new Response(JSON.stringify(newModels), { status: 201 });
    } catch (err) {
        return new Response(`${err}`, { status: 400 });
    }
}

export async function updateModule(req: Request, id: string): Promise<Response> {
    try {
        type ModuleInput = Partial<Module>;
        const data: ModuleInput = await req.json() as ModuleInput;

        const updatedModule = await moduleService.updateModule(id, data);
        if (!updatedModule) {
            return new Response("Module not found", { status: 404 });
        }
        return Response.json(updatedModule);
    } catch {
        return new Response("Invalid data", { status: 400 });
    }
}

export async function deleteModule(id: string): Promise<Response> {
    const deleted = await moduleService.deleteModule(id);
    if (!deleted) {
        return new Response("Module not found", { status: 404 });
    }
    return new Response(null, { status: 204 });
}
