export async function auth(req: Request, next: () => Promise<Response>): Promise<Response> {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }
  // can add cookies here
  return next();
}
