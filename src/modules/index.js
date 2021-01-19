import {fileLoader, mergeTypes} from 'merge-graphql-schemas';
import path from 'path';
import * as User from './user/index';
import * as trainee from './trainee/index';
const __dirname = path.resolve();
const typesArray = fileLoader(path.join(__dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...User.getMyProfile,
      ...trainee.Query
    },

    Mutation: {
      ...trainee.Mutation
    }
  },
  typeDefs,
};
