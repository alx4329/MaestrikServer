module.exports = async(_, {sort,filter,pages}, {models}) => {
    try{        
        
        let filterParams = {};
        if(filter){
            if(filter.id) filterParams.id = filter.id;
            if(filter.publisher) filterParams.publisher = filter.publisher;
            if(filter.author) filterParams.author = filter.author;
            if(filter.publicationYear) filterParams.publicationYear= filter.publicationYear;
        }
        let sortParams = {};

        if(sort){
            if(sort.field) sortParams[sort.field] = sort.order === 'ASC' ? 1 : -1;
            
        }
        const dbBooks = await models.Book.find(filterParams).sort(sortParams);
        let books = []

        if(filter?.title){
            dbBooks.forEach(book => {
                if(book.title.toLowerCase().includes(filter.title.toLowerCase())){
                    books.push(book)
                }
            })
        } else books = dbBooks
        let totalCount = books.length;

        let hasNextPage=false;
        let nextStart=0;
        if(pages){
            hasNextPage = totalCount > pages.offset + pages.limit;
            nextStart=(pages.offset + pages.limit)>totalCount? 0 : pages.offset + pages.limit;

            const init = pages.offset ? pages.offset : 0;
            const limit = pages.limit ? pages.limit : books.length;
            books = books.slice(init, init+limit);
        }
        const response = books.map(async(book) => {
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
        
        return {
            books: response,
            pageInfo: {
                totalCount,
                hasNextPage,
                nextStart
            }
        }
    }catch(e){
        console.log(e)
    }
}