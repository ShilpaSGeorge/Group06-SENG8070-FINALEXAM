import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Review } from "./Review";
import { Sale } from "./Sale";

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  address: string;

  @Column()
  phone: string;

  @OneToMany(() => Review, review => review.customer)
  reviews: Review[];

  @OneToMany(() => Sale, sale => sale.customer)
  sales: Sale[];
}
