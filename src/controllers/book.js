const { Books } = require("../db");
const { v4: uuidv4 } = require("uuid");

async function AddBook(req, res, next) {
  const id = uuidv4();
  let data = { ...req.body, id };

  try {
    const createdBook = await Books.create({
      title: data.title,
      isbn: data.isbn,
      editor: data.editor,
      price: data.price,
      author:data.author,
      availableBooks: data.availableBooks,
      totalBooks:data.totalBooks
    });
    
    return res.send("Booko Creado Satisfactoriamente");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
}


async function updateAvailable(req, res, next) {
  let { bookId, cantidad } = req.query;


  try {
    const before = await Books.findByPk(
      bookId
    )
   
    const libro = await Books.update(
      {
        availableBooks: before.availableBooks - cantidad
      },
      {
        where: {
          id: bookId,
        },
      }
    );
    res.json(libro)

  } catch (error) {
    next(error)
  }
}


module.exports = {
  AddBook,
  updateAvailable
};
