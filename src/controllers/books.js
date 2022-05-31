
const { Books,Purchases, Users } = require("../db");

async function finder() {
  const dataBase = await Books.findAll({});
  if (dataBase.length > 0) {
    const eventDb = dataBase.map((results) => {
      return {
        title: results.title,
        isbn: results.isbn,
        author:results.author,
        editor: results.editor,
        price: results.price,
        availableBooks:results.availableBooks,
        totalBooks:results.totalBooks
      };
    });
    return eventDb
  } else return []
}

async function getAllBooks(req, res) {

  try {
   
        const dataBase = await finder();
        if (dataBase.length > 0) 
        return res.send(dataBase)
       else return res.send([]);
      } catch (error) {
        return res
          .status(400)
          .send({ error: "Ocurrió un error durante la busqueda b" });
      }
  
}




async function getRecommended(req, res) {
  const { userId } = req.query
  try {
    const allBooks = await finder()

    const userPurchases = await Purchases.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: Books,
        },
        {
          model: Users,
        }
      ]
    });

    if (userPurchases.length > 0) {
    
      const alreadyBooks = [] 

      userPurchases.map(async t =>{
        const event = allBooks.filter(e=>e.id===t.eventId)
    
        alreadyBooks.push(event[0].title)        
      })
      const restBooks = []
      allBooks.map(e=>!alreadyBooks.includes(e.title)? restBooks.push(e):null)
      const recommended = []
     
      if (recommended.length > 0) return res.send(recommended)
      else return res.send([])

    }
    else {
      res.send([])
    }
  } catch (err) { console.log(err) }
}


module.exports = {
  getRecommended,
  getAllBooks,
  finder
};
