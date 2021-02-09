export default {
    loginUser: async (parent, args, context) => {
        const { payload: {email, password } } = args;
        console.log('--args--',args);
        const { dataSources: { userAPI } } = context;
        const response = await userAPI.loginUser({ email, password});
        return response.data;
    }
}