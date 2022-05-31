
const { Events,Tickets, Users } = require("../db");

async function finder() {
  const dataBase = await Events.findAll({});
  if (dataBase.length > 0) {
    const eventDb = dataBase.map((data) => {
      return {
        title: data.title,
        isbn: data.isbn,
        author:data.author,
        editor: data.editor,
        price: data.price,
        availableBooks:data.availableBooks,
        totalBooks:data.totalBooks
      };
    });
    return eventDb
  } else return []
}

async function getAllEvents(req, res) {

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
    const allEvents = await finder()

    const userTickets = await Tickets.findAll({
      where: {
        userId: userId
      },
      include: [
        {
          model: Events,
        },
        {
          model: Users,
        }
      ]
    });

    if (userTickets.length > 0) {
    
      const alreadyEvents = [] 

      userTickets.map(async t =>{
        const event = allEvents.filter(e=>e.id===t.eventId)
    
        alreadyEvents.push(event[0].title)        
      })
      const restEvents = []
      allEvents.map(e=>!alreadyEvents.includes(e.title)? restEvents.push(e):null)
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
  getAllEvents,
  finder
};
