const  { models} = require('mongoose')

module.exports = async (_, {id,input}, {models,auth}) => {
    try{
        const authUser = await auth()
        const userId = authUser.user.id;
        const user = await models.User.findById(userId);

        if(user){
            const author = await models.Author.findOneAndUpdate({_id:id},input,{new:true});
            return author;
        } else return {error: 'User not found'}
    }catch(err){
        console.log(err)
    }
}