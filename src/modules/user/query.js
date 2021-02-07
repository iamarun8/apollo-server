export default {
    getMyProfile: async (parent, args, context) => {
        console.log('inside getmyprofile----');
        const { dataSources: { userAPI } } = context;
        const response = await userAPI.getMe();
        console.log('--getmyprofile--',response);
        return response.data;
    }
}