const express = require("express")
const port = process.env.PORT || 3000
const app = express()
const { graphqlHTTP } = require('express-graphql')


let resolvers = require("./src/resolvers")
let  schema = require("./src/schema")


app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
  rootValue : resolvers,
}))


app.listen(port, console.log(`Les serveur Express écoute sur le port ${port}`))