const  { models} = require('mongoose')

module.exports = async (_, {id,input}, {models,auth}) => {
    try{
        const authUser = await auth()
        const userId = authUser.user.id;
        const user = await models.User.findById(userId);

        if(user){
            const publisher = await models.Publisher.findOneAndUpdate({_id:id},input,{new:true});
            return publisher;
        } else return {error: 'User not found'}
    }catch(err){
        console.log(err)
    }
}