import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { app } from "../../index";
import { Customer } from "../../entity/Customer";

describe("CustomerController", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  it("should create a customer", async () => {
    const customer: Partial<Customer> = {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      address: "123 Main St",
      phone: "1234567890",
    };

    const response = await request(app).post("/customers").send(customer);
    expect(response.status).toBe(201);
    expect(response.body.name).toBe(customer.name);
  });

  // Add more integration tests for other CRUD operations
});
