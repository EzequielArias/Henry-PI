const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id : {
      type : DataTypes.UUID,
      defaultValue : sequelize.UUIDV4,
      primaryKey : true,
      allowNull : false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary : {
      type : DataTypes.STRING,
      allowNull : false
    },
    healthScore : {
      type : DataTypes.INTEGER,
      allowNull: false
    },
    analyzedInstructions : {
      type : DataTypes.ARRAY(DataTypes.STRING),
      allowNull : false
    }
  });
};
