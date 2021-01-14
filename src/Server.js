import Express from "express";
import pkg from "apollo-server-express";
const { ApolloServer } = pkg;
class Server {
  app;
  constructor(config) {
    this.config = config;
    this.app = Express();
    this.run = this.run.bind(this);
  }

  get application() {
    return this.app;
  }

  bootstrap() {
    this.setupRoutes();
    return this;
  }

  setupRoutes() {
    this.app.use("/health-check", (req, res, next) => {
      res.send("I am OK");
      next();
    });
    return this;
  }

  run() {
    const { app } = this;
    app.listen(9001, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`App is running on port ${9001}`);
    });
    return this;
  }

  async setupApollo(schema) {
    const { app } = this;
    (this.server = new ApolloServer({
      ...schema,
      onHealthCheck: () =>
        new Promise((resolve) => {
          resolve("I am OK ---");
        }),
    })),
      this.server.applyMiddleware({ app });
    this.run();
  }
}

export default Server;
