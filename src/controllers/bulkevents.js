const { Event } = require("../db.js");
const { v4: uuidv4 } = require("uuid");
const { finder } = require('./events.js')

async function bulkEvents(req, res) {

    let data = { ...req.body };
    try {
        const existentEvents = await finder()

       
            let valores = Object.values(data);
           
            valores.map(async e=>{

                const createdEvent = await Events.create({
                    id: uuidv4(),
                    title: data.title,
                    isbn: data.isbn,
                    editor: data.editor,
                    price: data.price,
                    availableBooks:data.availableBooks,
                    // availableTickets: data.availableTickets,
                    isImportant: data.isImportant,
                });
               
                });
           

            return res.send('Eventos precargados con exito')
        


    } catch (error) {
        console.log(error);
        res.status(500).send("error al precargar eventos");
    }
}

module.exports = {
    bulkEvents,
};