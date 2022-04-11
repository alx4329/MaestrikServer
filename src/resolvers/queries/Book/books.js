module.exports = async(_, {}, {models}) => {
    try{
        return await models.Book.find();
    }catch(e){
        console.log(e)
    }
}