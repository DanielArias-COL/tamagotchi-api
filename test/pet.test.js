import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";

import app from "../app.js";

test("GET /pet responde 200", async () => {
  const response = await request(app).get("/pet");
  assert.equal(response.status, 200);
});

test("GET /pet responde JSON", async () => {
  const response = await request(app).get("/pet");
  assert.match(response.headers["content-type"], /application\/json/);
});

test("GET /pet incluye el mensaje esperado", async () => {
  const response = await request(app).get("/pet");
  assert.equal(response.body.message, "Current pet status");
});

test("GET /pet incluye las propiedades del pet", async () => {
  const response = await request(app).get("/pet");
  assert.ok(response.body.pet);
  assert.ok("name" in response.body.pet);
  assert.ok("species" in response.body.pet);
  assert.ok("health" in response.body.pet);
  assert.ok("hunger" in response.body.pet);
  assert.ok("happiness" in response.body.pet);
  assert.ok("energy" in response.body.pet);
});

test("GET /no-existe responde 404", async () => {
  const response = await request(app).get("/no-existe");
  assert.equal(response.status, 404);
});
