const {gql} = require('apollo-server');

module.exports = gql`
    type Author {
        id: ID!
        firstName: String!
        lastName: String!
        country: String!
        books: [Book]
    }
    type Query{
        authors: [Author]
        author(id:ID!): Author
    }

    input createAuthorInput{
    firstName: String!
    lastName: String!
    country: String!
    books:[ID]
}
    input updateAuthorInput{
    firstName: String
    lastName: String
    country: String
}
    type deleteAuthorPayload{
    id: ID!
}
    type Mutation{
        createAuthor(input: createAuthorInput!): Author!
        updateAuthor(id:ID, input: updateAuthorInput): Author!
        deleteAuthor(id: ID): deleteAuthorPayload!
        addBooksToAuthor(id: ID!, books: [ID!]): Author
    }

  `