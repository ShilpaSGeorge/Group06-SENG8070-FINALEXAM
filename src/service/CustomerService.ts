import { getCustomRepository } from "typeorm";
import { CustomerRepository } from "../repository/CustomerRepository";
import { Customer } from "../entity/Customer";

export class CustomerService {
  private customerRepository = getCustomRepository(CustomerRepository);

  async createCustomer(customer: Customer): Promise<Customer> {
    return this.customerRepository.save(customer);
  }

  async getCustomers(): Promise<Customer[]> {
    return this.customerRepository.find();
  }

  async getCustomerById(id: number): Promise<Customer | undefined> {
    return this.customerRepository.findOne(id);
  }

  async updateCustomer(id: number, customer: Customer): Promise<Customer | undefined> {
    await this.customerRepository.update(id, customer);
    return this.getCustomerById(id);
  }

  async deleteCustomer(id: number): Promise<void> {
    await this.customerRepository.delete(id);
  }
}
