import { Request, Response } from "express";
import { AuthorService } from "../service/AuthorService";

export class AuthorController {
  private authorService = new AuthorService();

  async createAuthor(req: Request, res: Response): Promise<void> {
    const author = await this.authorService.createAuthor(req.body);
    res.status(201).json(author);
  }

  async getAuthors(req: Request, res: Response): Promise<void> {
    const authors = await this.authorService.getAuthors();
    res.status(200).json(authors);
  }

  async getAuthorById(req: Request, res: Response): Promise<void> {
    const author = await this.authorService.getAuthorById(Number(req.params.id));
    res.status(200).json(author);
  }

  async updateAuthor(req: Request, res: Response): Promise<void> {
    const author = await this.authorService.updateAuthor(Number(req.params.id), req.body);
    res.status(200).json(author);
  }

  async deleteAuthor(req: Request, res: Response): Promise<void> {
    await this.authorService.deleteAuthor(Number(req.params.id));
    res.status(204).send();
  }
}
