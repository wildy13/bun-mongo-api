import * as moduleController from "./controllers";

export async function Route(req: Request): Promise<Response> {
    const url = new URL(req.url);
    const { pathname } = url;
    const method = req.method;

    if ((pathname === "/module" || pathname === "/module/") && method === "GET") {
        return moduleController.getModules();
    }

    if ((pathname === "/module" || pathname === "/module/") && method === "POST") {
        return moduleController.createModule(req);
    }

    const moduleIdMatch = pathname.match(/^\/module\/([^\/]+)$/);
    if (moduleIdMatch) {
        const id = moduleIdMatch[1];
        if (!id) return new Response("Invalid module id", { status: 400 });

        if (method === "GET") {
            return moduleController.getModuleById(id);
        }
        if (method === "PUT") {
            return moduleController.updateModule(req, id);
        }
        if (method === "DELETE") {
            return moduleController.deleteModule(id);
        }
    }

    return new Response("Not Found", { status: 404 });
}
