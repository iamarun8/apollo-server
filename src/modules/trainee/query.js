import user from '../../service/user';
import { response } from 'express';
export default {
    getAllTrainees: async(parent, args, context) => {
        const { payload: {skip, limit, sort } } = args;
        const { dataSources: { traineeAPI } } = context;
        const response = await traineeAPI.getAll({ skip, limit, sort });
        return response;
    },

    getTrainee: async(parent, args, context) => {
        const { dataSources: { userAPI } } = context;
        const response= await userAPI.me();
        return response;
    }
};