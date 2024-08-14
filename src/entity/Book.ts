import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from "typeorm";
import { Author } from "./Author";
import { Review } from './Review';
import { Sale } from "./Sale";


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

  @OneToMany(() => Review, review => review.book)
  reviews!: Review[];

  @OneToMany(() => Sale, sale => sale.book)
  sales!: Sale[];
}