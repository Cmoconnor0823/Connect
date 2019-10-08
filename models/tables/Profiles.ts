// module.exports = function(sequelize, DataTypes) {
//     let Profile = sequelize.define("Profile", {
   
//         firstName: {
//           type: DataTypes.STRING,
//           allowNull: false,
//           validate: {
//             len: [1]
//         }},
//         lastName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate:{
//                 len:[1]
//             }
//         },
//         userName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate: {
//               len: [1]
//           }},
//         email: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate:{
//                 len:[1]
//             }
//         },
//         phone: {
//             type: DataTypes.INTEGER,
//             allowNull: false,
//             validate:{
//                 len:[1]
//             }
//         },
//         password: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate:{
//                 len:[1]
//             }
//         }, positions: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             validate:{
//                 len:[1]
//             }
//         }


//     });

//     // Profile.associate = function(models) {
// //         Profile.belongsToMany(models.Project, {
// // <<<<<<< HEAD
// //           through:models.Project,as:"profile_id"
// //         });
// //     Profile.associate = function(models) {
// //         Profile.hasMany(models.Message, {through:models.Message, as:"message"});
// //     };
// //     Profile.associate = function(models) {
// //         Profile.hasMany(models.Project_Meta, {
// //           through:models.Project_Meta,as:'profile_id'
// // =======
// //           through: models.CurrentGame,
// //           foreignKey: "ProfileID",
// //           otherKey: "ProjectID"
// //         });
// //     Profile.associate = function(models) {
// //         Profile.hasMany(models.Message, {
// //           through: models.CurrentGame,
// //           foreignKey: "ProfileID",
// //           otherKey: "MessageID"
// //         });
// //     };
// //     Profile.associate = function(models) {
// //         Profile.hasMany(models.Project_Meta, {
// //           through: models.CurrentGame,
// //           foreignKey: "ProfileID",
// //           otherKey: "Project_MetaID"
// // >>>>>>> 643a92d18adcda9b68a9f7e70032ed3f5ac02e55
// //         });
// //     };

    

//     return Profile;
// //   };
// }
