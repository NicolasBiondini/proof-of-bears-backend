import { Document, Model } from "mongoose";

export interface post {
  profileID: string;
  postLensID: string;
  section: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface postDoc extends Document {
  profileID: string;
  postLensID: string;
  section: string;
  title: string;
  price: number;
  image: string;
  description: string;
}

export interface PostModelInterface extends Model<postDoc> {
  build(obj: post): postDoc;
}
