import { Request, Response } from "express";
import { BookService } from "../service/BookService";

export class BookController {
  private bookService = new BookService();

  async createBook(req: Request, res: Response): Promise<void> {
    const book = await this.bookService.createBook(req.body);
    res.status(201).json(book);
  }

  async getBooks(req: Request, res: Response): Promise<void> {
    const books = await this.bookService.getBooks();
    res.status(200).json(books);
  }

  async getBookById(req: Request, res: Response): Promise<void> {
    const book = await this.bookService.getBookById(Number(req.params.id));
    res.status(200).json(book);
  }

  async updateBook(req: Request, res: Response): Promise<void> {
    const book = await this.bookService.updateBook(Number(req.params.id), req.body);
    res.status(200).json(book);
  }

  async deleteBook(req: Request, res: Response): Promise<void> {
    await this.bookService.deleteBook(Number(req.params.id));
    res.status(204).send();
  }
}
