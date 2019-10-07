module.exports = function(sequelize, DataTypes) {
    let Project = sequelize.define("Project", {
   
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
        through:models.Profile,as:"project_id"
      });
  Project.associate = function(models) {
      Project.hasMany(models.Message, {
        through:models.Message,as:'project_id'
      });
  };
  Project.associate = function(models) {
      Project.hasMany(models.Project_Meta, {
        through: models.Project_Meta,as:'project_id'
      });
  };
    return Project;
  }
};