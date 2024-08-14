import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Customer } from "./Customer";
import { Book } from "./Book";

@Entity()
export class Sale {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.sales)
  customer: Customer;

  @ManyToOne(() => Book, book => book.sales)
  book!: Book;

  @Column()
  salePrice: number;

  @Column()
  dateSold: Date;
}
