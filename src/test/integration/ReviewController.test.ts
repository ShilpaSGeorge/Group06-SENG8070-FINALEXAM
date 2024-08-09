import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { app } from "../../index";
import { Review } from "../../entity/Review";

describe("ReviewController", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  it("should create a review", async () => {
    const review: Partial<Review> = {
      rating: 5,
      reviewPublished: new Date("2023-01-01"),
    };

    const response = await request(app).post("/reviews").send(review);
    expect(response.status).toBe(201);
    expect(response.body.rating).toBe(review.rating);
  });

  // Add more integration tests for other CRUD operations
});
