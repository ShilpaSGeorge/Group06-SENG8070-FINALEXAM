import { BookService } from "../../service/BookService";
import { Book } from "../../entity/Book";
import { getCustomRepository } from "typeorm";
import { BookRepository } from "../../repository/BookRepository";

jest.mock("typeorm", () => ({
  getCustomRepository: jest.fn(),
}));

describe("BookService", () => {
  let bookService: BookService;
  let bookRepository: BookRepository;

  beforeEach(() => {
    bookRepository = new BookRepository();
    (getCustomRepository as jest.Mock).mockReturnValue(bookRepository);
    bookService = new BookService();
  });

  it("should create a book", async () => {
    const book = new Book();
    book.title = "Sample Book";
    bookRepository.save = jest.fn().mockResolvedValue(book);

    const result = await bookService.createBook(book);
    expect(result).toEqual(book);
    expect(bookRepository.save).toHaveBeenCalledWith(book);
  });

  // Add more unit tests for other CRUD operations
});
