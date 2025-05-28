import mongoose from "mongoose";
import { Route } from "./routes/index";
import { logger } from "./middleware/logger";
import { cors } from "./middleware/cors";

async function main() {
    await mongoose.connect(`${process.env.DB_API}`);
    console.log("✅ Connected to MongoDB");

    async function handler(req: Request): Promise<Response> {
        return Route(req);
    }

    async function middlewareChain(req: Request): Promise<Response> {
        return logger(req, () => cors(req, () => handler(req)));
    }

    Bun.serve({
        hostname: process.env.HOST,
        port: Number(process.env.PORT),

        fetch: middlewareChain,
    });

    console.log(`🚀 Server running at ${process.env.BACKEND_API}`);
}

main().catch((err) => {
    console.error("❌ MongoDB connection error:", err);
});
