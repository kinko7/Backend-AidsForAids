const { DataTypes } = require("sequelize");
// const crypto = require("crypto");

module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    email:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING(64),
      allowNull: true,
     
    },
 
    googleId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
   
   
    // isAdmin: {
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: false,
    // },
  });

};
