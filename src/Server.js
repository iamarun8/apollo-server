import Express from "express";
import { ApolloServer } from 'apollo-server-express';
import { createServer } from "http";
import { UserAPI } from './datasource/index';
class Server { 
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
    this.app.use("/test", (req, res) => {
      res.send("Test is running");
    });
    return this;
  }

  run() {;
    const { app } = this;
    const {config: { PORT }} = this;
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
    (this.Server = new ApolloServer({
      ...schema,
      dataSources: () => {
        const userAPI = new UserAPI();
        return { userAPI };
      },
      context: ({req})=>{
        if(req){
          return {token: req.headers.authorization};
        }
        return{};
      }
    })),
      this.Server.applyMiddleware({ app });
      this.httpServer = createServer(app);
      this.Server.installSubscriptionHandlers(this.httpServer);
      this.run();
  }
}

export default Server;