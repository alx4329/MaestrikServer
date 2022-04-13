module.exports = async(_, {}, {models,auth}) => {
    try{
        const authUser = await auth()
        const userId = authUser.user.id;
        const user = await models.User.findById(userId);

        if(user){
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
        }else return {error: 'User not found'}
    }catch(e){
        console.log(e)
    }
}