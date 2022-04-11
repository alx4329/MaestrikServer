module.exports = async(_, {}, {models}) => {
    try{
        const dbAuthors=await models.Author.find();
        const authors = dbAuthors.map(async(author) => {
            const books = author.books.map(async(book)=>{
                return await models.Book.findById(book)
            })
            return{
                id: author.id,
                firstName: author.firstName,
                lastName: author.lastName,
                country: author.country,
                books
            }
        })
        return authors

    }catch(e){
        console.log(e)
    }
}