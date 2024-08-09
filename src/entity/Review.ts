import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Book } from "./Book";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.reviews)
  customer: Customer;

  @ManyToOne(() => Book, book => book.reviews)
  book: Book;

  @Column()
  rating: number;

  @Column()
  reviewPublished: Date;
}
