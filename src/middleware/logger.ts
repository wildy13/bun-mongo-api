export function logger(req: Request, next: () => Promise<Response>): Promise<Response> {
    const userAgent = req.headers.get("user-agent");

    const time = new Intl.DateTimeFormat("id-ID", {
        timeZone: "Asia/Jakarta",
        hour12: false,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(new Date());

    console.log(`[${time}] ${req.method} ${req.url} by ${userAgent}`);
    return next();
}
