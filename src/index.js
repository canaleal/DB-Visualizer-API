import { createServer } from 'node:http'
import { createYoga } from 'graphql-yoga'
import { schema } from './graphql/index.js'
 
// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({ schema })
 
// Pass it into a server to hook into request handlers.
const server = createServer(yoga)

// Import dotenv
import dotenv from 'dotenv'
dotenv.config()

// Connect to the database
import { connectDB } from './config/db.js'
connectDB()
 
// Start the server and you're done!
server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})