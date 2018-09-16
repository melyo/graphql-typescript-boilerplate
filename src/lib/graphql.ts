import { ApolloServer } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import typeDefs from './../definitions'
import resolvers from './../resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })

export default new ApolloServer({ schema })
