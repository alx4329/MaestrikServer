require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (_, {args}, {models}) =>{
    try{
        const user = await models.User.findOne({email: args.email});
        if(user){
            const isValid = await bcrypt.compare(args.password, user.password);
            if(isValid){
                const token = jwt.sign({id: user.id}, process.env.SECRET_KEY);
                return {
                    token,

                    // user: {
                    //     id: user.id,
                    //     username: user.username,
                    //     email: user.email
                    // }
                }
            }else return {error: 'Email and password doesnt match'}
        }else return {error: 'User not found'}
    }catch(err){
        console.log(err)
    }
}