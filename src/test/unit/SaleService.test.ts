import { SaleService } from "../../service/SaleService";
import { Sale } from "../../entity/Sale";
import { getCustomRepository } from "typeorm";
import { SaleRepository } from "../../repository/SaleRepository";

jest.mock("typeorm", () => ({
  getCustomRepository: jest.fn(),
}));

describe("SaleService", () => {
  let saleService: SaleService;
  let saleRepository: SaleRepository;

  beforeEach(() => {
    saleRepository = new SaleRepository();
    (getCustomRepository as jest.Mock).mockReturnValue(saleRepository);
    saleService = new SaleService();
  });

  it("should create a sale", async () => {
    const sale = new Sale();
    sale.salePrice = 19.99;
    saleRepository.save = jest.fn().mockResolvedValue(sale);

    const result = await saleService.createSale(sale);
    expect(result).toEqual(sale);
    expect(saleRepository.save).toHaveBeenCalledWith(sale);
  });

  // Add more unit tests for other CRUD operations
});
