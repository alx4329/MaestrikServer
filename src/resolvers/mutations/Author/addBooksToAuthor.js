module.exports = async (_, {id,books}, {models,auth}) =>{
    try{
        const authUser = await auth()
        const userId = authUser.user.id;
        const user = await models.User.findById(userId);
        if(user){
            const author = await models.Author.findById(id);
            if(author){
                const BooksToSet =await  books.map(async(book)=>{
                    return await models.Book.findById(book)
                })
                
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

        }else return {error: 'User not found'}
    }catch(err){
        console.log(err)
    }
}