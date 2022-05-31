const { Purchases, Users, Books } = require("../db.js");
const { v4: uuidv4 } = require("uuid");


async function getPurchases(req, res, next) {

    let { idUser } = req.query

    try {
       
        const dataBase = await Purchases.findAll({
            where: {
                userId: idUser
            },
            include: [
                {
                    model: Books
                },
                {
                    model: Users
                }
            ]
        });
        if (dataBase.length > 0) return res.send(dataBase);
        else {
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}

async function postPurchases(req, res, next) { 

    let { cantidad, userId, idPurchase } = req.body;
    
    
    try {

        const user = await Users.findOne({
            where: {
                id: userId
            }

        });

        const book = await Books.findOne({
            where: {
                id:idBook
            }
        });

        while (cantidad > 0) {
            const id = uuidv4();
            const createdPurchase = await Purchases.create({
                id: id,
                owner: user.fullName
            });
            console.log('Compra creada: => ',createdPurchase.dataValues)
            
            await user.addPurchases(createdPurchase);

            await book.addPurchases(createdPurchase);
            
            cantidad--;
        }

        res.send('Compra creada correctamente');

    } catch (error) {
        next(error)
    }

}

async function getBookPurchases(req, res){
    let { bookId } = req.query

    try {
       
        const bookPurchases = await Purchases.findAll({
            where: {
                bookId: bookId
            },
            include: [
                {
                    model: Books
                },
                {
                    model: Users
                }
            ]
        });
        if (bookPurchases.length > 0) return res.send(bookPurchases);
        else {
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}





module.exports = {
    getPurchases,
    postPurchases,
    getBookPurchases
    
};
