module.exports = async(_, {}, {models}) => {
    try{
        const dbBooks = await models.Book.find();
        const books = dbBooks.map(async(book) => {
            const authors= book.author.map(async(authorID) => {
                return await models.Author.findById(authorID);
            })
            const publisher = await models.Publisher.findById(book.publisher)
            return{
                id: book.id,
                title: book.title,
                ISBN: book.ISBN,
                synopsis: book.synopsis,
                genres: book.genres,
                publicationYear: book.publicationYear,
                author: authors,
                publisher
            }
        })
        return books
    }catch(e){
        console.log(e)
    }
}