const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define(
    "note",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
        alowNull: false,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
      archived: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      },
      category: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: true,
      updatedAt: "fecha",
      createdAt: false,
    }
  );
};
