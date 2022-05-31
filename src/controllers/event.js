const { Events } = require("../db");
const { v4: uuidv4 } = require("uuid");

async function AddEvent(req, res, next) {
  const id = uuidv4();
  let data = { ...req.body, id };

  try {
    const createdEvent = await Events.create({
      title: data.title,
      isbn: data.isbn,
      editor: data.editor,
      price: data.price,
      author:data.author,
      availableBooks: data.availableBooks,
      isImportant: data.isImportant,
    });
    
    return res.send("Evento Creado Satisfactoriamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}


async function updateAvailable(req, res, next) {
  let { eventId, cantidad } = req.query;


  try {
    const before = await Events.findByPk(
      eventId
    )
   
    const evento = await Events.update(
      {
        availableTickets: before.availableTickets - cantidad
      },
      {
        where: {
          id: eventId,
        },
      }
    );
    res.json(evento)

  } catch (error) {
    next(error)
  }
}


module.exports = {
  AddEvent,
  updateAvailable
};
