import Router from "express";
import { addBook, deleteBook, getBookById, getBooks, updateBook } from "../controllers/booksController.js";

const router = Router();

router.get("/", getBooks);
router.get("/:id", getBookById);
router.post("/", addBook);
router.put("/:id", updateBook);
router.delete("/:id", deleteBook);

export default router;