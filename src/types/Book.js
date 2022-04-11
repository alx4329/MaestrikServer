const {gql} = require('apollo-server');

module.exports = gql`
    type Book {
        id: ID!
        title: String!
        ISBN: String!
        synopsis: String!
        genres: [String]
        publicationYear: Int
    }
    type Query{
        books: [Book]
        book(id:ID!): Book
    }

    input createBookInput{
        id: ID!
        title: String!
        ISBN: String!
        synopsis: String!
        genres: [String]!
        publicationYear: Int!
}
    input updateBookInput{
        id: ID!
        title: String
        ISBN: String
        synopsis: String
        genres: [String]
        publicationYear: Int
}
    type deleteBookPayload{
    id: ID!
}
    type Mutation{
        createBook(input: createBookInput!): Book!
        updateBook(id:ID, input: updateBookInput): Book!
        deleteBook(id: ID): deleteBookPayload!
    }

  `