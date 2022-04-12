module.exports = async(_, {}, {models}) => {
    try{
        const dbPublis=await models.Publisher.find();
        const publishers=dbPublis.map(async(publisher)=>{
            const books=publisher.books.map(async(bookID)=>{
                return await models.Book.findById(bookID);
            })
            return{
                id: publisher.id,
                name: publisher.name,
                foundationYear: publisher.foundationYear,
                books
            }
        })
        return publishers
    }catch(e){
        console.log(e)
    }
}