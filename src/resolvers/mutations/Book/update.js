const  { models} = require('mongoose')

module.exports = async (_, {id,input}, {models}) => {
    try{
        const book = await models.Book.findOneAndUpdate({_id:id},input,{new:true});
        return book;
    }catch(err){
        console.log(err)
    }
}