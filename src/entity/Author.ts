import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Book } from "./Book";

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number; // Definite assignment assertion

  @Column()
  name: string = ''; // Default value

  @Column()
  dob: Date = new Date(); // Default value

  @Column()
  genre: string = ''; // Default value

  @OneToMany(() => Book, book => book.author)
  books!: Book[]; // Definite assignment assertion
}

