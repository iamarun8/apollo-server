import schema from "./modules/index.js";
import Server from "./Server.js";
import configuration from "./config/configuration.js";

const server = new Server(configuration);
(() => {
  server.bootstrap().setupApollo(schema);
})();
