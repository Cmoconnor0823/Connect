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
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
          }},
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
        }, positions: {
            type: DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }
        }


    });

    Profile.associate = function(models) {
        Profile.belongsToMany(models.Project, {
          through:"project_users",as:"profile_id"
        });
    Profile.associate = function(models) {
        Profile.hasMany(models.Message);
    };
    Profile.associate = function(models) {
        Profile.hasMany(models.Project_Meta, {
          through:models.Project_Meta,as:'profile_id'
        });
    };

    

    return Profile;
  };
}
