import { expect, describe, it } from "bun:test";


if (!process.env.BACKEND_API) {
    throw new Error("Missing environment variable: API");
}

const BASE_URL = `${process.env.BACKEND_API}/module`;

describe("Module API", () => {
    let createdModuleId: string = "";

    interface Module {
        _id: string,
        number: string;
        name: string;
        version: number;
        url: string
    }

    it("should create a module", async () => {
        const res = await fetch(BASE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                _id: "1",
                number: "VTD-AUT-01-03",
                name: "3 Stroke Petrol Engine",
                version: 1.0,
                url: "http://localhost/SMK/test.zip",
            }),
        });

        expect(res.status).toBe(201);

        const json = await res.json() as Module;

        expect(json._id).toBeDefined();
        expect(json.number).toBe("VTD-AUT-01-03");
        expect(json.name).toBe("3 Stroke Petrol Engine");
        expect(json.version).toBe(1.0);
        expect(json.url).toBe("http://localhost/SMK/test.zip");
        createdModuleId = json._id;

    });

    it("should get all modules", async () => {
        const res = await fetch(`${BASE_URL}/`);
        expect(res.status).toBe(200);

        const modules = await res.json() as Module[]; 
        expect(modules).toBeDefined();
    });


    it("should get the spesific module", async () => {
        const res = await fetch(`${BASE_URL}/${createdModuleId}`);
        expect(res.status).toBe(200);

        const json = await res.json() as Module;
        expect(json._id).toBe(createdModuleId);
    });

    it("should update the module", async () => {
        const res = await fetch(`${BASE_URL}/${createdModuleId}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: "3 Stroke Petrol Engine update" }),
        });

        expect(res.status).toBe(200);

        const json = await res.json() as Module;

        expect(json.name).toBe("3 Stroke Petrol Engine update");
    });

    it("should delete the module", async () => {
        const res = await fetch(`${BASE_URL}/${createdModuleId}`, {
            method: "DELETE",
        });

        expect(res.status).toBe(204);
    });

    it("should return 404 for deleted module", async () => {
        const res = await fetch(`${BASE_URL}/${createdModuleId}`);
        expect(res.status).toBe(404);
    });

});
