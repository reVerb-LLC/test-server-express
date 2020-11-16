import App from "./app";
import express from "express";

class Server {
  static port = 3004;
  public static start = (app: express.Application): Server => {
    app.listen(Server.port, () => {
      console.log(`Server 4 listening on port ${Server.port}`);
    });
    return new Server();
  };
}

Server.start(App);
