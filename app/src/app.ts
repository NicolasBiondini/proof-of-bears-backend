import express, { Express } from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";

import { PORT, MONGO_URL } from "./config/config";
import { postRouter } from "./routes/post";

class Server {
  app: Express;
  // Use the constructor to create an instance of express and use the class methods.
  constructor() {
    this.app = express();
    this.server();
    this.setMongoConfig();
    this.middlewares();
    this.routes();
  }

  private setMongoConfig() {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(MONGO_URL, {
        useNewUrlParser: true,
      } as ConnectOptions)
      .then((res) => {
        console.log("DB Connected and ready.");
      })
      .catch((err) => console.log(err));
  }

  // Create a middlewares method.
  middlewares() {
    this.app.use(express.json());
    // CORS added
    this.app.use(
      cors({
        origin: "*",
      })
    );
  }

  // Create a method to use the different routes of the app.
  routes() {
    this.app.get("/", (req, res) => {
      res.json({
        users: [
          { name: "Nicolás", lastname: "Biondini" },
          { name: "Jonh", lastname: "Doe" },
        ],
      });
    });
    this.app.use(postRouter);
  }

  // Create a method to start the server.
  server() {
    this.app.listen(PORT, () => {
      console.log(`API listening on port ${PORT}`);
    });
  }
}

export default new Server();
