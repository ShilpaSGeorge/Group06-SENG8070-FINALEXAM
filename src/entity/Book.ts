import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Author } from "./Author";

@Entity()
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  price: number;

  @Column()
  stock: number;

  @Column()
  bookType: string;

  @Column()
  datePublished: Date;

  @ManyToOne(() => Author, author => author.books)
  author: Author;
}
