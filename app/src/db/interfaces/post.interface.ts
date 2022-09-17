import { Document, Model } from "mongoose";

export interface post {
  title: string;
  price: number;
  image: string;
}

export interface postDoc extends Document {
  title: string;
  price: number;
  image: string;
}

export interface PostModelInterface extends Model<postDoc> {
  build(obj: post): postDoc;
}
