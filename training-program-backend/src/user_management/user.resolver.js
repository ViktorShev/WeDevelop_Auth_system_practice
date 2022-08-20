import models from '~/src/service_providers/sequelize/models'

export default {
  Mutation: {
    createUser: async (obj, args, context, info) => {
      try {
        const user = await models.user.create(args.data)

      return {
        code: 0,
        success: true,
        message: `The user ${user.username} was successfully created.`,
        user
      }
    } catch (err) {
      console.log(err)
      return {
        code: 1,
        success: false,
        message: err.message,
        user: null
      }
    }
    }
  },

  Query: {
    allUsers: async (obj, args, context, info) => {
      try {
        const users = await models.user.findAll()

      return {
        code: 0,
        success: true,
        message: 'Retrieved all users successfully.',
        users: users
      }

      } catch (err) {
        return {
          code: 1,
          success: false,
          message: 'Could not retrieve all users.',
          users: []
        }
      }
    },

    loggedInUser: async (obj, args, context, info) => {
    }
  }
}
