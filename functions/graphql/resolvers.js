const db = require("../db");
const { itemsResolver } = require("./utils/firestore.resolvers");

const resolverFunctions = {
  Query: {
    hi: async () => {
      try {
        const result = await db.collection("message").doc("1").get();
        return result.data().test;
      } catch (error) {
        return error;
      }
    },
    user: async (parent, { id }) => {
      try {
        const result = await db.collection("Users").doc(id).get();
        return result.data();
      } catch (error) {
        return error;
      }
    },
    users: async () => {
      try {
        const result = await db.collection("Users").get();
        const data = itemsResolver(result.docs);
        return data;
      } catch (error) {
        return error;
      }
    },
  },
  Mutation: {
    createUser: async (parent, args) => {
      try {
        const {input} = JSON.parse(JSON.stringify(args));
        await db.collection("Users").add(input);
        return 'success'
      } catch (error) {
        return error;
      }
    },
    updateUser: async (parent, args) => {
      try {
        const {input: {id, data}} = JSON.parse(JSON.stringify(args));
        await db.collection("Users").doc(id).update(data);
        return 'success'
      } catch (error) {
        return error;
      }
    },
    deleteUser: async (parent, {id}) => {
      try {
        await db.collection("Users").doc(id).delete();
        return 'success'
      } catch (error) {
        return error;
      }
    },
  },
};

module.exports = resolverFunctions;
