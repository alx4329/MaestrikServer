# MaestrikServer
## Challenge for Backend Developer.

### Description
This repository presents the results of a Backend Developer Challenge.
The server is built using NodeJs, GraphQL and Apollo. JWT is used for authentication and the DataBase is made using Mongoose.
### Installing
Download and run npm install. 
```
> git clone https://github.com/alx4329/MaestrikServer.git
> npm i
```
Before you can run the server successfully, the a .env file should be created with the information of the mongodb database uri.
The file `.env.template` can be use as template for this file.
npm start to start the server.
```
> node index.js
```
or
```
> npm start
```
The Database is loaded with some Books, Auhtors and Publishers. In case of needing to reload the data you can uncomment the lines on src/config/db.js and start the server.

## Trying out 
Author queries and all the mutations need authentication. You should sign in and paste the received token on header authorization. 

```
header authorization: "Bearer token"
```
