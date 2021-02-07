import schema from './modules/index';
import Server from './Server';
import config from './config/confirgurations'

const server = new Server(config);
(() => {
  console.log('schema-->',schema);
  server.bootstrap().setupApollo(schema);
})();
