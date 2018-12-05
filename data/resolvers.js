// import {User} from './models/users';
import * as db from './models/index'

const resolvers = {
    Query: {
        allUsers() {
          return User.find({});
        },
        async user(root, args){
            const user = await db.User.findById({_id: args._id});
            return [user];
        },

        async allOrders() {
            const orders = await db.Order.find();
            return orders;
        }
    },
    Mutation: {
        addUser(root, args) {
            let user = new User();
            user.name = args.name;
            user.surname = args.surname;
            return user.save();
        },
        deleteUser(root, args) {
            return User.deleteOne({_id: args.id});
        },
        updateUser(root, args) {
            let _tempUser = Object.assign({}, args);
            delete _tempUser.id;
            return User.updateOne({_id: args.id},{$set: _tempUser});
        },
        async addOrder(root, args) {
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