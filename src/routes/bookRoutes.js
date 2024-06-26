import Router from "express";
import BookController from "../controllers/bookController.js";

const router = Router();

router.get("/", BookController.getBooks);
router.get("/search", BookController.getBooksByFilter);
router.get("/:id", BookController.getBookById);
router.post("/", BookController.addBook);
router.put("/:id", BookController.updateBook);
router.delete("/:id", BookController.deleteBook);

export default router;