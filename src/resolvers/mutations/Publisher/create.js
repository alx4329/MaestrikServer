module.exports = async (_, {input}, {models,auth}) =>{
    try{
        const authUser = await auth()
        const userId = authUser.user.id;
        const user = await models.User.findById(userId);

        if(user){
            const publisher = await models.Publisher.create(input);
            return publisher;
        } else return {error: 'User not found'}
    }catch(err){
        console.log(err)
    }
}