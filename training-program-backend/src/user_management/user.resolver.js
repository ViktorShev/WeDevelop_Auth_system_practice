import models from '~/src/service_providers/sequelize/models'
import { hashPassword, doHashesMatch } from '../utils/eval_credentials'

export default {
  Mutation: {
    createUser: async (obj, args, context, info) => {
      try {
        const user = await models.user.create(args.data)

      return {
        code: 0,
        success: true,
        message: `The user ${user.username} was successfully created.`,
        user: user
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
          message: err.message,
          users: []
        }
      }
    },

    userByCredentials: async (obj, args, context, info) => {
      const user = await models.user.findOne({where: {email: args.email}})
      const hashedUserProvidedPassword = hashPassword(args.password, user?.salt)
      if (doHashesMatch(user?.password, hashedUserProvidedPassword)) {
        return {
          code: 0,
          success: true,
          message: `The user retrieved is ${user.username}`,
          user: user
        }
      }
      
      return {
        code: 1,
        success: false,
        message: 'Provided password or email is invalid.',
        user: null
      }
    },

    userById: async (obj, args, context, info) => {
      try {
        const user = await models.user.findOne({where: {id: args.id}})
        if (user) {
          return {
            code: 0,
            success: true,
            message: `The retrieved user is ${user.username}`,
            user: user
          }
        }
      } catch (err) {
        return {
          code: 1,
          success: false,
          message: err.message,
          user: null        
        }
      }
    }
  }
}
