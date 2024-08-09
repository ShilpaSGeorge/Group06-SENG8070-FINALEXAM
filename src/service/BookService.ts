import { getCustomRepository } from "typeorm";
import { BookRepository } from "../repository/BookRepository";
import { Book } from "../entity/Book";

export class BookService {
  private bookRepository = getCustomRepository(BookRepository);

  async createBook(book: Book): Promise<Book> {
    return this.bookRepository.save(book);
  }

  async getBooks(): Promise<Book[]> {
    return this.bookRepository.find();
  }

  async getBookById(id: number): Promise<Book | undefined> {
    return this.bookRepository.findOne(id);
  }

  async updateBook(id: number, book: Book): Promise<Book | undefined> {
    await this.bookRepository.update(id, book);
    return this.getBookById(id);
  }

  async deleteBook(id: number): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
