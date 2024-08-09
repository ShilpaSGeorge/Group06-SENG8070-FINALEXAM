import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialData1634567890123 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      INSERT INTO author (name, dob, genre) VALUES
      ('Author 1', '1970-01-01', 'Fiction'),
      ('Author 2', '1980-02-02', 'Non-Fiction'),
      ('Author 3', '1990-03-03', 'Science Fiction');

      INSERT INTO book (title, genre, price, stock, bookType, datePublished, authorId) VALUES
      ('Book 1', 'Fiction', 19.99, 10, 'Physical', '2023-01-01', 1),
      ('Book 2', 'Non-Fiction', 29.99, 5, 'E-Book', '2023-02-01', 2),
      ('Book 3', 'Science Fiction', 39.99, 3, 'Audiobook', '2023-03-01', 3);

      INSERT INTO customer (name, email, address, phone) VALUES
      ('Customer 1', 'customer1@example.com', '123 Main St', '1234567890'),
      ('Customer 2', 'customer2@example.com', '456 Elm St', '0987654321'),
      ('Customer 3', 'customer3@example.com', '789 Oak St', '1122334455');

      INSERT INTO review (customerId, bookId, rating, reviewPublished) VALUES
      (1, 1, 5, '2023-04-01'),
      (2, 2, 4, '2023-05-01'),
      (3, 3, 3, '2023-06-01');

      INSERT INTO sale (customerId, bookId, salePrice, dateSold) VALUES
      (1, 1, 19.99, '2023-07-01'),
      (2, 2, 29.99, '2023-08-01'),
      (3, 3, 39.99, '2023-09-01');
    `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DELETE FROM sale;
      DELETE FROM review;
      DELETE FROM customer;
      DELETE FROM book;
      DELETE FROM author;
    `);
  }
}
