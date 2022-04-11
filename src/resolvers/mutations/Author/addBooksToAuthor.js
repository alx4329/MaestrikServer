module.exports = async (_, {id,books}, {models}) =>{
    try{
        console.log("estoy en la mutat")
        const author = await models.Author.findById(id);
        if(author){
            const BooksToSet =await  books.map(async(book)=>{
                return await models.Book.findById(book)
            })
            console.log("===",BooksToSet)
            author.books =[...author.books, ...books]; 
            await author.save();
            
            return {
                id: author.id,
                firstName: author.firstName,
                lastName: author.lastName,
                country: author.country,
                books: BooksToSet
            }
        } else return {error: 'Author not found'}
    }catch(err){
        console.log(err)
    }
}