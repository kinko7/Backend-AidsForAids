const { Events } = require("../db.js");
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
                    title: e.title,
                    isbn: e.isbn,
                    editor: e.editor,
                    price: e.price,
                    availableBooks:e.availableBooks,
                    totalBooks:e.totalBooks
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