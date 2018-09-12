
//making table
module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        projectName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            }
        },
        projectDescription: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            }
        },

        // need to add technologies
    });


    Project.associate = function (models) {
        Project.belongsTo(models.NonProfitProfile, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return Project;
};
