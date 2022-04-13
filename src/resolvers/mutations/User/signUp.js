require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (_, {args}, {models}) =>{
    try{
        
        const {email, password, username} = args;        
        const user = await models.User.findOne({email});
        if(user){
            return {error: 'User already exists'}
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await models.User.create({email, password: hashedPassword, username});
            const token = jwt.sign({id: newUser.id}, process.env.SECRET_KEY);
            return {token}
        }
    }catch(e){
        console.log(e)
    }
}