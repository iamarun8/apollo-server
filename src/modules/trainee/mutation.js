import userInstance from '../../service/user';
import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
    createTrainee: (parent, args, context) => {
        const { user } = args;
        const addeddata = userInstance.createUser(user);
        pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: addeddata});
        return addeddata;
    },

    updateTrainee: (parent, args, context) => {
        const { id, role } = args;
        const updateddata = userInstance.updateUser(id, role);
        pubsub.publish(constant.subscriptions.TRAINEE_UPDATED, { traineeeUpdated: updateddata});
        return updateddata;
    },

    deleteTrainee: (parent, args, context) => {
        const { id } = args;
        const deleteddata = userInstance.deleteUser(id);
        pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: deleteddata});
        return deleteddata;
    }
}