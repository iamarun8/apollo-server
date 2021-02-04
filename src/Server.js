import Express from "express";
import { ApolloServer } from 'apollo-server-express';
import { createServer } from "http";
import { UserAPI } from './datasource/index';
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
    this.app.use("/", (req, res, next) => {
      res.send("I am OK");
      next();
    });
    return this;
  }

  run() {;
    const { app } = this;
    const {config: { PORT }} = this;
    console.log('port is',PORT);
    this.httpServer.listen(PORT, (err) => {
      if (err) {
        console.log(err);
      }
      console.log(`App is running on port ${PORT}`);
    });
    return this;
  }

  async setupApollo(schema) {
    const { app } = this;
    (this.server = new ApolloServer({
      ...schema,
      dataSources: () => ({
        userAPI: new UserAPI(),
      }),
      onHealthCheck: () =>
        new Promise((resolve) => {
          resolve("I am OK ---");
        }),
    })),
      this.server.applyMiddleware({ app });
      this.httpServer = createServer(app);
      this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }
}

export default Server;
