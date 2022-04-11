module.exports = async (_, {input}, {models}) =>{
    try{
        const author = await models.Author.create(input);
        return author;
    }catch(err){
        console.log(err)
    }
}