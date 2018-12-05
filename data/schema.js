import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';
const typeDefs = `
    type Query {
      ### Query to  find all the user
      allUsers: [User]
      ### Query to find specific user
      user(_id: String): [User]
      ### Query to find  all the user
      allOrders: [Order]
    }
    type Mutation {
      # A mutation to add a new user
      addUser(name: String!, surname: String!): User,
      # a mutation to delete user
      deleteUser(id: String!): User,
      # a mutation to update a user 
      updateUser(id: String!, name: String, surname: String): User

      # A mutation to create order update order
      addOrder(orderId: String!, amount: String, createdAt: String!, createdBy: String): Order,
      # A mutation to update the  order
      updateOrder(id: String!, orderId: String, amount: String, createAt: String, createdBy: String): Order,
      # A mutation to delete order
      deleteOrder(id: String!): Order,
    }
    type User {
        _id: String,
        name: String,
        surname: String
    }
    type Order {
      id: String,
      orderId: String,
      amount: String,
      createdAt: String,
      createdBy: String,
      users: [User]
    }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;
