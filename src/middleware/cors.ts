export async function cors(req: Request, next: () => Promise<Response>): Promise<Response> {
    const res = await next();
    const headers = new Headers(res.headers);

    const allowedOrigins = [
        process.env.FRONTEND_API
    ];

    const origin = req.headers.get("Origin");

    if (origin && allowedOrigins.includes(origin)) {
        headers.set("Access-Control-Allow-Origin", origin);
    }

    headers.set("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    headers.set("Access-Control-Allow-Headers", "Content-Type, Authorization");

    return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers,
    });
}
