// module.exports = function(sequelize, DataTypes) {
// <<<<<<< HEAD
//     let Project = sequelize.define("Project", {
// =======
//     var Project = sequelize.define("Project", {
// >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
   
//       key: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate: {
//           len: [1]
//         }
//       }
//     });
    
//   Project.associate = function(models) {
//       Project.belongsToMany(models.Profile, {
// <<<<<<< HEAD
//         through:models.Profile,as:"project_id"
//       });
//   Project.associate = function(models) {
//       Project.hasMany(models.Message, {
//         through:models.Message,as:'project_id'
// =======
//         through: models.CurrentGame,
//         foreignKey: "ProjectID",
//         otherKey: "ProjectID"
//       });
//   Project.associate = function(models) {
//       Project.hasMany(models.Message, {
//         through: models.CurrentGame,
//         foreignKey: "ProjectID",
//         otherKey: "MessageID"
// >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
//       });
//   };
//   Project.associate = function(models) {
//       Project.hasMany(models.Project_Meta, {
// <<<<<<< HEAD
//         through: models.Project_Meta,as:'project_id'
//       });
//   };
//     return Project;
//   }
// };
// =======
//         through: models.CurrentGame,
//         foreignKey: "ProjectID",
//         otherKey: "Project_MetaID"
//       });
//   };
//     return Project;
//   };
// >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
