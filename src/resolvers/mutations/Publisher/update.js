const  { models} = require('mongoose')

module.exports = async (_, {id,input}, {models}) => {
    try{
        const publisher = await models.Publisher.findOneAndUpdate({_id:id},input,{new:true});
        return publisher;
    }catch(err){
        console.log(err)
    }
}