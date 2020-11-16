const request = require("supertest");

const PORTS = [3001, 3002, 3003, 3004];

describe("Server Route Integration", () => {
  PORTS.forEach((PORT) => {
    describe("baseRoute", () => {
      it(`${PORT} responds with status 200`, () =>
        request(`http://localhost:${PORT}`).get("/").expect(200));
    });
    describe("/api", () => {
      ["/", "/login", "/signup"].forEach((route) => {
        describe(`${route}`, () => {
          it(`${PORT} responds with status 200`, () =>
            request(`http://localhost:${PORT}`)
              .get(`/api${route}`)
              .expect(200));
        });
      });
    });

    describe("/auth", () => {
      ["/", "/verify", "/create"].forEach((route) => {
        describe(`${route}`, () => {
          it(`${PORT} responds with status 200`, () =>
            request(`http://localhost:${PORT}`)
              .get(`/auth${route}`)
              .expect(200));
        });
      });
    });
  });
});
