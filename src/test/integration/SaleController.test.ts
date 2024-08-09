import request from "supertest";
import { createConnection, getConnection } from "typeorm";
import { app } from "../../index";
import { Sale } from "../../entity/Sale";

describe("SaleController", () => {
  beforeAll(async () => {
    await createConnection();
  });

  afterAll(async () => {
    await getConnection().close();
  });

  it("should create a sale", async