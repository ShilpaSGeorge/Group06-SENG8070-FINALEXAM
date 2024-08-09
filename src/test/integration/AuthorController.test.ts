import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { app } from "../../index";
import { Author } from "../../entity/Author";

describe("AuthorController", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  it("should create an author", async () => {
    const author: Partial<Author> = {
      name: "John Doe",
      dob: new Date("1980-01-01"),
      genre: "Fiction",
    };

    const response = await request(app).post("/authors").send(author);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(author.name);
  });

  // Add more integration tests for other CRUD operations
});
