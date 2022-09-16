import { Document } from "mongoose";

export interface example extends Document {
  name: string;
  gender: string;
  age: number;
}
