import pubsub from '../pubsub';
import constant from '../../lib/constant';

export default {
    traineeAdded: {
        subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_ADDED]),
    },

    traineeUpdated: {
        subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_UPDATED]),
    },

    traineeDeleted: {
        subscribe: () => pubsub.asyncIterator([constant.subscriptions.TRAINEE_DELETED]),
    },
};