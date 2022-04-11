module.exports = async(_, {}, {models}) => {
    try{
        return await models.Author.find();

    }catch(e){
        console.log(e)
    }
}