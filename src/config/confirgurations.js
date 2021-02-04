import * as dotenv from 'dotenv';
const envVars = dotenv.config().parsed;
// const config = envVars.parsed;
// export default config;
// console.log ('config is', config);
// Object.freeze(config);
const config = {
    PORT: envVars.PORT,
    serviceURL: envVars.SERVICE_URL,
};
export default config;