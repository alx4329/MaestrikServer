module.exports = async (_, {id}, {models}) => {
    try{
        const deletePublisher = await models.Publisher.deleteOne({_id: id});    
        if(deletePublisher.deletedCount) return{id: id}
    }catch(e){
        console.log(e)
    }
}