module.exports = function(sequelize, DataTypes) {
    let Message = sequelize.define("Message", {
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    Message.associate = function(models) {

      //Message should belong to a Profile
      // A Message can't be created without an Profile due to the foreign key constraint
      Message.belongsTo(models.Profile, { through:'profile_message', as: 'message' })
    };

    Message.associate = function(models) {
      Message.belongsTo(models.Project, { through:'project_message', as: 'message' });
    };
  
    return Message;
  };
  