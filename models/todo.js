
module.exports = (sequelize, DataTypes) => {
  const toDo = sequelize.define('toDo', {
      post: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        },
        deadline: {
          type: DataTypes.STRING,
          allowNull: true,
      }
    }
    });
    return toDo;
  };