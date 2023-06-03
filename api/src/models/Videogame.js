const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo

// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogame', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description:{
      type:DataTypes.STRING(1234),
    },
    platforms:{
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    background_image:{
      type: DataTypes.STRING,
      isUrl:true,
      allowNull: false,
    },
    released : {
      type: DataTypes.STRING,
    },
    rating :{
      type: DataTypes.FLOAT,
    }
  },{
    timestamps:false,
  });
};


