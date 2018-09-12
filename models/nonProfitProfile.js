
//making table
module.exports = function (sequelize, DataTypes) {
    var NonProfitProfile = sequelize.define("NonProfitProfile", {
        companyName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            }
        },
    });


    NonProfitProfile.associate = function (models) {
        NonProfitProfile.hasMany(models.Project, {
            onDelete: "cascade"
        });
        NonProfitProfile.belongsToMany(models.User, { through: models.OrganizationUser });

    };





    return NonProfitProfile;
};
