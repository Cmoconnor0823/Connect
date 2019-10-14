
module.exports = (sequelize, DataTypes) => {
  const NewsPost = sequelize.define('NewsPost', {
      post: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    return NewsPost;
  };