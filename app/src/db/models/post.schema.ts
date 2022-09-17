import { Schema, model } from "mongoose";
import { post, PostModelInterface } from "../interfaces/post.interface";

const PostSchema = new Schema({
  profileID: { type: String, required: [true, "Field is required"] },
  postLensID: { type: Number, required: [true, "Field is required"] },
  section: { type: String, required: [true, "Field is required"] },
  title: { type: String, required: [true, "Field is required"] },
  price: { type: Number, required: [true, "Field is required"] },
  image: { type: String, required: [true, "Field is required"] },
  description: { type: String, required: [true, "Field is required"] }
});

PostSchema.statics.build = (obj: post) => {
  return new Post(obj);
};

export const Post = model<any, PostModelInterface>("Post", PostSchema);
