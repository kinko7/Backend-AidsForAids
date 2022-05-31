const { Users } = require('../db.js');
// const bcrypt = require('bcrypt');



async function getUsers(req, res, next){
    try {

        const dataBase = await Users.findAll();
        if(dataBase.length > 0) 
        return res.send(dataBase);
        else{
            res.send([])
        }

    } catch (error) {
        next(error)
    }
}

async function getUserById(req, res, next){

    let { id } = req.params;

    try {
        const dataBase = await Users.findOne({
            where:{
                id:id
            }
        })

        if(dataBase){
            res.json(dataBase);
        } else{
            return res.json("No existe un Usuario con esa Id")
        }
    } catch (error) {
        next(error);
    }
}


async function updateUser(req, res, next){

    let id = req.params.id;
    const {
        address,
        picture

      } = req.body;
      try {
        await Events.update(
          {
            address,
            picture
    
          },
          {
            where: {
              id: id,
            },
          }
        );
    
        let eventUpdated = await Events.findByPk(id);
      
    
        res.json(eventUpdated)
      } catch (error) {
        next(error)
      }
    
    }

module.exports = {
    getUsers,
    getUserById,
    updateUser
}