module.exports = function(sequelize, DataTypes) {
    let Project = sequelize.define("Project", {
   
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      adminaccess:{
        type:DataTypes.INTEGER,
        allowNull: false,
      }
    });

  Project.associate = function(models) {
      Project.hasMany(models.Messages);
  };
  Project.associate = function(models) {
    Project.hasMany(models.Profiles, {through:'project-users',as:'projectID'});
};
    return Project;
  };
