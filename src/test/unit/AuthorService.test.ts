import { AuthorService } from "../../service/AuthorService";
import { Author } from "../../entity/Author";
import { getCustomRepository } from "typeorm";
import { AuthorRepository } from "../../repository/AuthorRepository";

jest.mock("typeorm", () => ({
  getCustomRepository: jest.fn(),
}));

describe("AuthorService", () => {
  let authorService: AuthorService;
  let authorRepository: AuthorRepository;

  beforeEach(() => {
    authorRepository = new AuthorRepository();
    (getCustomRepository as jest.Mock).mockReturnValue(authorRepository);
    authorService = new AuthorService();
  });

  it("should create an author", async () => {
    const author = new Author();
    author.name = "John Doe";
    authorRepository.save = jest.fn().mockResolvedValue(author);

    const result = await authorService.createAuthor(author);
    expect(result).toEqual(author);
    expect(authorRepository.save).toHaveBeenCalledWith(author);
  });

  // Add more unit tests for other CRUD operations
});
