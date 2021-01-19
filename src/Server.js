import Express from "express";
import { ApolloServer } from 'apollo-server-express';
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

  run() {;
    const { app } = this;
    const {config: { PORT }} = this;
    console.log('port is',PORT);
    app.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`App is running on port ${PORT}`);
    });
    return this;
  }

  async setupApollo(schema) {
    console.log('scheme--',schema);
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
