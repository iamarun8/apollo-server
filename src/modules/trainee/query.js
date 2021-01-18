import user from '../../service/user';

export default {
    getAllTrainees: () => {
        return user.getAllUsers();
    },

    getTrainee: (parent, args) => {
        const { id } = args;
        return user.getUser(id);
    }
}