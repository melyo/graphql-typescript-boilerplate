import * as express from 'express'
import config from './config'
import exception from './lib/exception'
import graphql from './lib/graphql'
import logger from './lib/logger'
import middleware from './lib/middleware'

// Init express
const app = express()

// Middleware
middleware(app)

// Graphql
graphql.applyMiddleware({ app })

// Exception handler
exception(app)

// Run HTTP
app.listen(config.app.port, () => logger.info(`[APP] Up and running on port ${config.app.port}`))
