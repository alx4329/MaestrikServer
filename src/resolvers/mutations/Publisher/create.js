module.exports = async (_, {input}, {models}) =>{
    try{
        console.log(models.Publisher)
        const publisher = await models.Publisher.create(input);
        return publisher;
    }catch(err){
        console.log(err)
    }
}