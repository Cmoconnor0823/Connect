// module.exports = function(sequelize, DataTypes) {
//     let Project_Meta = sequelize.define("Project_Meta", {
// <<<<<<< HEAD
//       meta_key: {
// =======
//       id: {
// >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         autoIncrement:true,
//         primaryKey: true,
//         validate: {
//           len: [1]
//         }
//       },
//       adminaccess: {
//         type: DataTypes.BOOLEAN,
// <<<<<<< HEAD
//         allowNull: false
// =======
//         allowNull: false,
//         autoIncrement:true,
//         primaryKey: true,
//         validate: {
//           len: [1]
//         }
// >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
//     }
//   });
  
//     Project_Meta.associate = function(models) {

// <<<<<<< HEAD
//       Project_Meta.belongsTo(models.Profile, {through:models.Profile, as:"pm_id" })
//     };
    
//     Project_Meta.associate = function(models) {
//       Project_Meta.belongsTo(models.Project, {through:models.Project, as:"pm_id" 
// =======
//       Project_Meta.belongsTo(models.Profile, {
//         foreignKey: {
//           allowNull: false
//         }
//       })
//     };
    
//     Project_Meta.associate = function(models) {
//       Project_Meta.belongsTo(models.Project, {
//         foreignKey: {
//           allowNull: false
//         }
// >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
//       }
//     );

//     };
  
//     return Project_Meta;
//   };