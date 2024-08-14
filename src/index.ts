import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { AuthorController } from "./controller/AuthorController";
import { BookController } from "./controller/BookController";
import { CustomerController } from "./controller/CustomerController";
import { ReviewController } from "./controller/ReviewController";
import { SaleController } from "./controller/SaleController";

const app = express();
app.use(express.json());

// Create a connection to the database
createConnection().then(() => {
    console.log("Database connection established");

    // Initialize controllers after the connection is established
    const authorController = new AuthorController();
    const bookController = new BookController();
    const customerController = new CustomerController();
    const reviewController = new ReviewController();
    const saleController = new SaleController();

    // Set up routes
    app.post("/authors", authorController.createAuthor);
    app.get("/authors", authorController.getAuthors);
    app.get("/authors/:id", authorController.getAuthorById);
    app.put("/authors/:id", authorController.updateAuthor);
    app.delete("/authors/:id", authorController.deleteAuthor);

    app.post("/books", bookController.createBook);
    app.get("/books", bookController.getBooks);
    app.get("/books/:id", bookController.getBookById);
    app.put("/books/:id", bookController.updateBook);
    app.delete("/books/:id", bookController.deleteBook);

    app.post("/customers", customerController.createCustomer);
    app.get("/customers", customerController.getCustomers);
    app.get("/customers/:id", customerController.getCustomerById);
    app.put("/customers/:id", customerController.updateCustomer);
    app.delete("/customers/:id", customerController.deleteCustomer);

    app.post("/reviews", reviewController.createReview);
    app.get("/reviews", reviewController.getReviews);
    app.get("/reviews/:id", reviewController.getReviewById);
    app.put("/reviews/:id", reviewController.updateReview);
    app.delete("/reviews/:id", reviewController.deleteReview);

    app.post("/sales", saleController.createSale);
    app.get("/sales", saleController.getSales);
    app.get("/sales/:id", saleController.getSaleById);
    app.put("/sales/:id", saleController.updateSale);
    app.delete("/sales/:id", saleController.deleteSale);

    // Start the server after setting up the routes
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch(error => {
    console.error("Error connecting to the database: ", error);
});
