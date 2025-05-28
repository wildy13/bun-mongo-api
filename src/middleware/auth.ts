export async function auth(req: Request, next: () => Promise<Response>): Promise<Response> {
  const authHeader = req.headers.get("Authorization");
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return new Response("Unauthorized", { status: 401 });
  }
  // bisa tambahkan validasi token di sini
  return next();
}
