module.exports = async (_, {id}, {models}) => {
    try{
        const deleteBook = await models.Book.deleteOne({_id: id});    
        if(deleteBook.deletedCount) return{id: id}
    }catch(e){
        console.log(e)
    }
}