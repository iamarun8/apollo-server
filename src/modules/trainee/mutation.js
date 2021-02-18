import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
    createTrainee: async(parent, args, context) => {
        const { user } = args;
        const { dataSources: { traineeAPI } } = context;
        const createRecord = await traineeAPI.createTrainee({...user});
        pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: createRecord.data });
        return createRecord.data;
    },

    updateTrainee: async(parent, args, context) => {
        const { User } = args;
        const { dataSources: { traineeAPI } } = context ;
        const updateRecord = await traineeAPI.updateTrainee({ ...User });
        pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeUpdated: updateRecord.data });
        return updateRecord.data;
    },
    
    deleteTrainee: async(parent, args, context) => {
        const { originalId } = args;
        const { dataSources: { traineeAPI } } = context ;
        const deleteRecord = await traineeAPI.deleteTrainee(originalId);
        pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deleteRecord.data });
        return deleteRecord.message;
    }
}