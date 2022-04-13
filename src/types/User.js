const {gql} = require('apollo-server');

module.exports = gql`
    type User {
        id: ID!
        username: String
        email: String
        password: String
    }

    type SignInResponse{
        token: String
        error: String
    }
    input SignInInput{
        email: String!
        password: String!
    }
    type SignUpResponse{
        token: String
        error: String
    }
    input SignUpInput{
        username: String!
        email: String!
        password: String!
    }
    type Query{
        users: [User]
        user(id:ID!): User
    }

    type Mutation{
        signUp(args:SignUpInput): SignUpResponse!
        signIn(args:SignInInput): SignInResponse!
    }



`