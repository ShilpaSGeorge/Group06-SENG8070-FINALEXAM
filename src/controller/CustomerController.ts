import { Request, Response } from "express";
import { CustomerService } from "../service/CustomerService";

export class CustomerController {
  private customerService = new CustomerService();

  async createCustomer(req: Request, res: Response): Promise<void> {
    const customer = await this.customerService.createCustomer(req.body);
    res.status(201).json(customer);
  }

  async getCustomers(req: Request, res: Response): Promise<void> {
    const customers = await this.customerService.getCustomers();
    res.status(200).json(customers);
  }

  async getCustomerById(req: Request, res: Response): Promise<void> {
    const customer = await this.customerService.getCustomerById(Number(req.params.id));
    res.status(200).json(customer);
  }

  async updateCustomer(req: Request, res: Response): Promise<void> {
    const customer = await this.customerService.updateCustomer(Number(req.params.id), req.body);
    res.status(200).json(customer);
  }

  async deleteCustomer(req: Request, res: Response): Promise<void> {
    await this.customerService.deleteCustomer(Number(req.params.id));
    res.status(204).send();
  }
}
