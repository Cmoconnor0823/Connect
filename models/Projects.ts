module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
   
      key: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    });
    
  Project.associate = function(models) {
      Project.belongsToMany(models.Profile, {
        through: models.CurrentGame,
        foreignKey: "ProjectID",
        otherKey: "ProjectID"
      });
  Project.associate = function(models) {
      Project.hasMany(models.Message, {
        through: models.CurrentGame,
        foreignKey: "ProjectID",
        otherKey: "MessageID"
      });
  };
  Project.associate = function(models) {
      Project.hasMany(models.Project_Meta, {
        through: models.CurrentGame,
        foreignKey: "ProjectID",
        otherKey: "Project_MetaID"
      });
  };
    return Project;
  };