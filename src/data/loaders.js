const authors = require('./authorsData')
const books = require('./booksData')
const publishers = require('./publishersData')
const models = require('../models')
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId;

const loadData = async () => {
    try{
        const publisherIds = publishers.map(async(p)=>{
            const created=await models.Publisher.create(p)
            return created._id
        })
        const authorIds =  authors.map(async(a)=>{
            const created=await models.Author.create(a)
            return created._id
        })
        Promise.all(authorIds).then(async(authorIds)=>{
            Promise.all(publisherIds).then(async(publisherIds)=>{
                let i=0;
                let j=0;
                const loadBooks = books.map(async(b)=>{ 
                    

                    const authorId = authorIds[i]
                    const publisherId = publisherIds[i]
                    if(j===4){
                        i++;
                        j=0;
                    } else j++;
                    const created=await models.Book.create({...b, author: authorId, publisher: publisherId})
                    
                    return created
                })
                Promise.all(loadBooks).then(async(books)=>{                   
                    
                    authorIds.forEach(async(authorId)=>{
                        const author = await models.Author.findById(authorId)
                        const BooksToSet = []
                        books.forEach(b=>{
                            if(b.author[0]==authorId) BooksToSet.push(b._id)                        
                        })
                        author.books = BooksToSet
                        await author.save()
                    })
                    publisherIds.forEach(async(publisherId)=>{
                        const publisher = await models.Publisher.findById(publisherId)
                        const BooksToSet = []
                        books.forEach(b=>{
                            if(b.publisher==publisherId) BooksToSet.push(b._id)                        
                        })
                        publisher.books = BooksToSet
                        await publisher.save()
                    })
                })

            })

        })

        
    }catch(e){
        console.log(e)
    }
}

module.exports = loadData

