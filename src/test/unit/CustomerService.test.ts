import { CustomerService } from "../../service/CustomerService";
import { Customer } from "../../entity/Customer";
import { getCustomRepository } from "typeorm";
import { CustomerRepository } from "../../repository/CustomerRepository";

jest.mock("typeorm", () => ({
  getCustomRepository: jest.fn(),
}));

describe("CustomerService", () => {
  let customerService: CustomerService;
  let customerRepository: CustomerRepository;

  beforeEach(() => {
    customerRepository = new CustomerRepository();
    (getCustomRepository as jest.Mock).mockReturnValue(customerRepository);
    customerService = new CustomerService();
  });

  it("should create a customer", async () => {
    const customer = new Customer();
    customer.name = "Jane Doe";
    customerRepository.save = jest.fn().mockResolvedValue(customer);

    const result = await customerService.createCustomer(customer);
    expect(result).toEqual(customer);
    expect(customerRepository.save).toHaveBeenCalledWith(customer);
  });

  // Add more unit tests for other CRUD operations
});
