import { Router, Request, Response } from "express";
import { getPostByID, getPosts, makePost } from "../controllers/posts";

const router = Router();

router.get("/posts", getPosts);
router.post("/post", makePost);
router.get("/post/:id", getPostByID);

export { router as postRouter };
