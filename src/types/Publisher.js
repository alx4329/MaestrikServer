const {gql} = require('apollo-server');

module.exports = gql`
    type Publisher {
        id: ID!
        name: String!
        foundationYear: Int!
        books:[Book]
    }
    type Query{
        publishers: [Publisher]
        publisher(id:ID!): Publisher
    }

    input createPublisherInput{
        name: String!
        foundationYear: Int!
        books:[ID]
        
    }
    input updatePublisherInput{
        name: String
        foundationYear: Int
        books:[ID]
        
}
    type deletePublisherPayload{
    id: ID!
}
    type Mutation{
        createPublisher(input: createPublisherInput!): Publisher!
        updatePublisher(id:ID, input: updatePublisherInput): Publisher!
        deletePublisher(id: ID): deletePublisherPayload!
    }

  `