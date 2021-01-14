import pkg from "merge-graphql-schemas";
const { fileLoader, mergeTypes } = pkg;
import path from "path";
import * as user from "./user/index.js";
const __dirname = path.resolve();
const typesArray = fileLoader(path.join(__dirname, "./**/*.graphql"));

const typeDefs = mergeTypes(typesArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.Query,
    },
  },
  typeDefs,
};
