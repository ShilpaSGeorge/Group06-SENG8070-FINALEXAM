import { getCustomRepository } from "typeorm";
import { AuthorRepository } from "../repository/AuthorRepository";
import { Author } from "../entity/Author";

export class AuthorService {
  private authorRepository = getCustomRepository(AuthorRepository);

  async createAuthor(author: Author): Promise<Author> {
    return this.authorRepository.save(author);
  }

  async getAuthors(): Promise<Author[]> {
    return this.authorRepository.find();
  }

  async getAuthorById(id: number): Promise<Author | undefined> {
    return this.authorRepository.findOne(id);
  }

  async updateAuthor(id: number, author: Author): Promise<Author | undefined> {
    await this.authorRepository.update(id, author);
    return this.getAuthorById(id);
  }

  async deleteAuthor(id: number): Promise<void> {
    await this.authorRepository.delete(id);
  }
}
