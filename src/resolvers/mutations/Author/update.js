const  { models} = require('mongoose')

module.exports = async (_, {id,input}, {models}) => {
    try{
        const author = await models.Author.findOneAndUpdate({_id:id},input,{new:true});
        return author;
    }catch(err){
        console.log(err)
    }
}