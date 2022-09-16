import { Schema, model } from "mongoose";
import { example } from "../interfaces/example.interface";

const ExampleSchema = new Schema({
  name: { type: String, required: [true, "Field is required"] },
  gender: { type: String, required: [true, "Field is required"] },
  age: { type: Number, required: [true, "Field is required"] },
});

export const Example = model<example>("Example", ExampleSchema);
