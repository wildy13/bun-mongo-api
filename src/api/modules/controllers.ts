import * as moduleService from "./services";
import type { Module } from "./types";

export async function getModules(): Promise<Response> {
    const users = await moduleService.getModules();
    return Response.json(users);
}

export async function getModuleById(id: string): Promise<Response> {
    const user = await moduleService.getModule(id);
    if (!user) {
        return new Response("Module not found", { status: 404 });
    }
    return Response.json(user);
}

export async function createModule(req: Request): Promise<Response> {
    try {
        type UserInput = Partial<Module>;
        const data: UserInput = await req.json() as UserInput;

        //console.log(typeof data.version, data);
        //return new Response('berhasil', { status: 201 });
        const newUser = await moduleService.createModule(data);
        return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (err) {
        return new Response(`Invalid Data : ${err}`, { status: 400 });
    }
}

export async function updateModule(req: Request, id: string): Promise<Response> {
    try {
        type UserInput = Partial<Module>;
        const data: UserInput = await req.json() as UserInput;

        const updatedUser = await moduleService.updateModule(id, data);
        if (!updatedUser) {
            return new Response("Module not found", { status: 404 });
        }
        return Response.json(updatedUser);
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
