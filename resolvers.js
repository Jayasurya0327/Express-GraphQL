const user = require("./users");
  
  const resolvers = {
    Query: {
      users: async () => {
        return await user.find();
      },
      user: async (parent, args) => {
        const currentuser = await user.findOne({ email: args.email });
      if (!currentuser) {
        throw new Error('User with this email does not exist');
      }
      return currentuser;
      },
    },
    Mutation: {
      createUser: async (parent, args) => {
        const existingUser = await user.findOne({ email: args.email });
      if (existingUser) {
        throw new Error('User with this email already exists');
      }
      const newUser = new user({
        name: args.name,
        email: args.email,
        age: args.age
      });
      return await newUser.save();
      },
    }
  };
  
  module.exports = resolvers;
  