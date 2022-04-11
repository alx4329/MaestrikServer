module.exports = async(_, {id}, {models}) => {
    try{
        return await models.Book.findById(id);
    }catch(e){
        console.log(e)
    }
}