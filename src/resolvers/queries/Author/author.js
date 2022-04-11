module.exports = async(_, {id}, {models}) => {
    try{
        return await models.Author.findById(id);
    }catch(e){
        console.log(e)
    }
}