import { Request, Response } from "express";
import { Post } from "../../db/models/post.schema";

export const getPostByID = async (req: Request, res: Response) => {
  try {
    if (!req.params.id)
      return res.status(404).json({ message: "Bad Request", data: [] });
    const post = await Post.findById(req.params.id);
    return res.status(201).json({ message: "All Correct", data: [post] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error", data: [] });
  }
};
