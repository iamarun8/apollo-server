import user from '../../service/user';
import { response } from 'express';
export default {
    getAllTrainees: async(parent, args, context) => {
        const { user } = args;
        const { dataSources: { traineeAPI } } = context;
        const response = await traineeAPI.getTrainees({...user});
        return response.data;
    },

    getTrainee: async(parent, args, context) => {
        const { dataSources: { userAPI } } = context;
        const response= await userAPI.me();
        return response.data;
    }
};