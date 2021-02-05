import * as dotenv from 'dotenv';
const envVars = dotenv.config().parsed;
console.log('service url',envVars.SERVICE_URL);
const config = {
        PORT: envVars.PORT,
        SERVICE_URL: envVars.SERVICE_URL,
    };
export default config;