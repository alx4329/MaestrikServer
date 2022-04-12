const {gql} = require('apollo-server');

module.exports = gql`
    type Book {
        id: ID!
        title: String!
        ISBN: String!
        synopsis: String!
        genres: [String]
        publicationYear: Int
        author: [Author]
        publisher: Publisher
        
    }
    type PageInfo {
        totalCount: Int
        hasNextPage: Boolean        
        nextStart: String
    }
    
    enum SortOrder{
        ASC
        DESC
    }
    enum SortableField{
        publicationYear
        title
    }
    input PageOptions{
        limit: Int,
        offset: Int,
    }
    input Sort{
        field: SortableField
        order: SortOrder = ASC
    }
    
    
    input Filter{
        title:String
        publicationYear:Int
        author:String
        publisher:String

        
    }

    input createBookInput{
        id: ID
        title: String!
        ISBN: String!
        synopsis: String!
        genres: [String]!
        publicationYear: Int!
        author: ID!
        publisher: ID!
    }
    input updateBookInput{
        id: ID
        title: String
        ISBN: String
        synopsis: String
        genres: [String]
        publicationYear: Int
        author: ID
        publisher: ID
    }
    type deleteBookPayload{
        id: ID!
    }
    type Response{
        books: [Book!]
        pageInfo: PageInfo!
    }
    type Query{
        books(sort:Sort,filter:Filter,pages:PageOptions): Response
        book(id:ID!): Book
    }

    type Mutation{
        createBook(input: createBookInput!): Book!
        updateBook(id:ID, input: updateBookInput): Book!
        deleteBook(id: ID): deleteBookPayload!
    }

  `