import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/confirgurations';

export default class TraineeAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${config.SERVICE_URL}/api`;
    }

    willSendRequest(request) {
        request.headers.set('authorization', this.context.token);
    }

    getAll(payload) {
        return this.get('/trainee',payload);
    }

    createTrainee(payload) {
        console.log('-----payload-----',payload);
        return this.post('/trainee', payload);
    }

    updateTrainee( payload) {
        return this.put('/trainee', payload);
    }

    deleteTrainee(originalId) {
        return this.delete(`/trainee/${originalId}`);
    }
}