module.exports = async (_, {id}, {models}) => {
    try{
        const deleteAuthor = await models.Author.deleteOne({_id: id});    
        if(deleteAuthor.deletedCount) return{id: id}
    }catch(e){
        console.log(e)
    }
}