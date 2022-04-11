module.exports = async(_, {}, {models}) => {
    try{
        return await models.Publisher.find();
    }catch(e){
        console.log(e)
    }
}