import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "./Book";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  dob!: Date;

  @Column()
  genre!: string;

  @OneToMany(() => Book, book => book.author, { cascade: true })
  books!: Book[];
}
