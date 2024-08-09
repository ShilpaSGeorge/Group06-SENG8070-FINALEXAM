import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { app } from "../../index";
import { Book } from "../../entity/Book";

describe("BookController", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  it("should create a book", async () => {
    const book: Partial<Book> = {
      title: "Sample Book",
      genre: "Fiction",
      price: 19.99,
      stock: 10,
      bookType: "Physical",
      datePublished: new Date("2023-01-01"),
    };

    const response = await request(app).post("/books").send(book);
    expect(response.status).toBe(201);
    expect(response.body.title).toBe(book.title);
  });

  // Add more integration tests for other CRUD operations
});
