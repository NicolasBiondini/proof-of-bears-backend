import { Request, Response } from "express";
import { Post } from "../../db/models/post.schema";

export const makePost = async (req: Request, res: Response) => {
  try {
    console.log(req.body);
    if (
      !req.body.title ||
      !req.body.price ||
      !req.body.image ||
      !req.body.profileID ||
      !req.body.postLensID ||
      !req.body.section
    )
      return res.status(404).json({ message: "Bad Request", data: [] });
    const post = Post.build({
      profileID: req.body.profileID,
      postLensID: req.body.postLensID,
      section: req.body.section,
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
    });
    await post.save();
    return res.status(201).json({ message: "All Correct", data: [post] });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server Error", data: [] });
  }
};
