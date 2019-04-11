const request = require("supertest");
const server = require("./server.js");

// testing endpoints
// returns correct status code
describe("server.js", () => {
  describe("GET /", () => {
    it("should respond with 200 OK", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.status).toBe(200);
        });
    });
    it("should work", async () => {
      const response = await request(server).get("/");
      expect(response.status).toBe(200);
    });
    it("should return JSON", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.type).toBe("application/json");
        });
    });
    it("should work", async () => {
      const response = await request(server).get("/");
      expect(response.body.api).toBeTruthy();
      expect(response.body.api).toBe("up");
    });
  });
});
