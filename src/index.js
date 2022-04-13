require('dotenv').config();
const {ApolloServer} = require('apollo-server');
const connectDB = require('./config/db');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const models = require('./models');
const jwt = require('jsonwebtoken');

connectDB();
const auth = async ( req ) => {
    try{
        if (req.headers && req.headers.authorization) {
        let auth = req.headers.authorization;
        let parts = auth.split(" ");
        let bearer = parts[0];
        let token = parts[1];
        if (bearer == "Bearer") {
        const user = getUser(token);
        if (user.error) {
            throw Error(user.msg);
        } else return { user };
        } else {
        throw Error("Authentication must use Bearer.");
        }
    } else {
        throw Error("User must be authenticated.");
    }

    }catch(e){
        console.log(e)
    }
  }
const getUser = (token) => {
    if(token){
        try{
            const user = jwt.verify(token, process.env.SECRET_KEY);
            return user;

        }catch(e){
            console.log(e)
        }
    }
}
const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({req}) =>{
        return {
            models,
            auth: () => auth(req)
        }
    }
})

server.listen({port: process.env.PORT || 4000}).then(({url})=>{
    console.log(`Server is running on ${url}`)
})