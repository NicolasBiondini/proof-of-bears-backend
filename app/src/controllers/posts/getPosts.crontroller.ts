import { Request, Response } from "express";
import { Post } from "../../db/models/post.schema";

export const getPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    return res.status(200).json({ message: "All Correct", data: posts });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error", data: [] });
  }
};
