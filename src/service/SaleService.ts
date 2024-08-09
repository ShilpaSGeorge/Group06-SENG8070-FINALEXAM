import { getCustomRepository } from "typeorm";
import { SaleRepository } from "../repository/SaleRepository";
import { Sale } from "../entity/Sale";

export class SaleService {
  private saleRepository = getCustomRepository(SaleRepository);

  async createSale(sale: Sale): Promise<Sale> {
    return this.saleRepository.save(sale);
  }

  async getSales(): Promise<Sale[]> {
    return this.saleRepository.find();
  }

  async getSaleById(id: number): Promise<Sale | undefined> {
    return this.saleRepository.findOne(id);
  }

  async updateSale(id: number, sale: Sale): Promise<Sale | undefined> {
    await this.saleRepository.update(id, sale);
    return this.getSaleById(id);
  }

  async deleteSale(id: number): Promise<void> {
    await this.saleRepository.delete(id);
  }
}
