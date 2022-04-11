module.exports = async(_, {id}, {models}) => {
    try{
        return await models.Publisher.findById(id);
    }catch(e){
        console.log(e)
    }
}