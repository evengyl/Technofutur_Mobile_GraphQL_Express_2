const { buildSchema } = require("graphql")

module.exports = buildSchema(`
    #Type
    type User{
        id: ID
        name: String
        email: String
        age: Int
        gardens: [Garden]
    }

    type Garden{
        id: ID
        taille: Int
        x: Int
        y: Int
        userId: Int
    }

    #Enum


    #Query signifie GET !!!
    #Query permet de faire des get, dans les type de données que l'on peux mettre vous avez String, Int, Boolean, ID, TypeObject, [Type]
    type Query{
        hello: String
        users: [User]!
        user(userId: ID!): User!
    }

    type Mutation{
        createUser(name: String!, email: String!, age: Int!): User!
        deleteUser(userId: ID!): Boolean!
    }

`)

