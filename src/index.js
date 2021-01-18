import schema from './modules';
import Server from './Server';
import config from './config/confirgurations'

const server = new Server(config);
(() => {
  server.bootstrap().setupApollo(schema);
})();
