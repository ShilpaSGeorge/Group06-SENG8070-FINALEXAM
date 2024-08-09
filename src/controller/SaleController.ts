import { Request, Response } from "express";
import { SaleService } from "../service/SaleService";

export class SaleController {
  private saleService = new SaleService();

  async createSale(req: Request, res: Response): Promise<void> {
    const sale = await this.saleService.createSale(req.body);
    res.status(201).json(sale);
  }

  async getSales(req: Request, res: Response): Promise<void> {
    const sales = await this.saleService.getSales();
    res.status(200).json(sales);
  }

  async getSaleById(req: Request, res: Response): Promise<void> {
    const sale = await this.saleService.getSaleById(Number(req.params.id));
    res.status(200).json(sale);
  }

  async updateSale(req: Request, res: Response): Promise<void> {
    const sale = await this.saleService.updateSale(Number(req.params.id), req.body);
    res.status(200).json(sale);
  }

  async deleteSale(req: Request, res: Response): Promise<void> {
    await this.saleService.deleteSale(Number(req.params.id));
    res.status(204).send();
  }
}
