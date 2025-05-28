import * as moduleRoute from "../api/modules/index";

export async function Route(req: Request): Promise<Response> {

    const url = new URL(req.url);
    const { pathname } = url;

    if(pathname.startsWith("/module")){
        return moduleRoute.Route(req);
    }

    return new Response("Not Found", { status: 404 });
}