module.exports = function(sequelize, DataTypes) {
    let Profile = sequelize.define("Profile", {
   
        firstName: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
        }},
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        phone: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate:{
                len:[1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        }

    });

    Profile.associate = function(models) {
        Profile.belongsToMany(models.Project, {
          through: models.CurrentGame,
          foreignKey: "ProfileID",
          otherKey: "ProjectID"
        });
    Profile.associate = function(models) {
        Profile.hasMany(models.Message, {
          through: models.CurrentGame,
          foreignKey: "ProfileID",
          otherKey: "MessageID"
        });
    };
    Profile.associate = function(models) {
        Profile.hasMany(models.Project_Meta, {
          through: models.CurrentGame,
          foreignKey: "ProfileID",
          otherKey: "Project_MetaID"
        });
    };

    

    return Profile;
  };
}
