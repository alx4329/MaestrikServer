module.exports = async (_, {id}, {models,auth}) => {
    try{
        const authUser = await auth()
        const userId = authUser.user.id;
        const user = await models.User.findById(userId);

        if(user){
            const deletePublisher = await models.Publisher.deleteOne({_id: id});    
            if(deletePublisher.deletedCount) return{id: id}
        } else return {error: 'User not found'}
    }catch(e){
        console.log(e)
    }
}