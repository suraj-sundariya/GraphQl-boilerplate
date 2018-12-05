// import {User} from './models/users';
import * as db from './models/index'

const resolvers = {
    Order: {
        id: ({ _id }) => _id,
        async users({}){
            return await db.User.find();
        }
    },
    Query: {
        allUsers() {
          return User.find({});
        },
        async user(_, args){
            console.log('root', root, '  args', args, 'context', context);
            const user = await db.User.findById({_id: args._id});
            return [user];
        },

        async allOrders() {
            const orders = await db.Order.find();
            return orders;
        }
    },
    Mutation: {
        async addUser(_, args) {
            console.log('args', args);
            const insertStatement = {
                name: args.name,
                surname: args.surname,
            };
            const user = await db.User.create(insertStatement)
            return user;
        },
        deleteUser(_, args) {
            return User.deleteOne({_id: args.id});
        },
        updateUser(_, args) {
            let _tempUser = Object.assign({}, args);
            delete _tempUser.id;
            return User.updateOne({_id: args.id},{$set: _tempUser});
        },
        async addOrder(_, args) {
            const insertStatement = {
                orderId: args.orderId,
                amount: args.amount,
                createdAt: args.createdAt,
                createdBy: args.createdBy,
            };
            const orders = await db.Order.create(insertStatement)
            return orders;
        }
    }

};

export default resolvers;