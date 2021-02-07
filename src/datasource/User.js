import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/confirgurations';

export default class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${config.SERVICE_URL}/api/user`;
        console.log('baseURL/user',baseURL);
    }

    willSendRequest(request){
        request.headers.set('authorization',this.context.token);
    }

    getMe() {
        return this.get('/me');
    }

    loginUser(payload) {
        return this.post('/login', payload);
    }
}