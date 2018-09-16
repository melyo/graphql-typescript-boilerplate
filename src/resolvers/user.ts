import User from '../models/user'

const users = async () => {
    const userModel = new User()

    return await userModel.all()
}

const user = async (root, args, ct) => {
    const userModel = new User()

    return await userModel.find(args.id)
}

const create = async (root, args, ct) => {
    const userModel = new User()

    return await userModel.create(args.input)
}

const update = async (root, args, ct) => {
    const userModel = new User()

    return await userModel.update(args.id, args.input)
}

export default {
    Mutation: {
        user_create: create,
        user_update: update
    },
    Query: {
        user,
        users
    }
}
