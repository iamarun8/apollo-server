export default {
    loginUser: async (parent, args, context) => {
        const { payloads: {email, password } } = args;
        const { dataSources: { userAPI } } = context;
        const response = await userAPI.loginUser({ email, password});
        return response.data;
    }
}