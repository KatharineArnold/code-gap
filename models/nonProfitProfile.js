module.exports = function (sequelize, DataTypes) {
    var NonProfitProfile = sequelize.define("NonProfitProfile", {
        companyName: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            }
        },
        availability: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
    });


    // VolunteerProfile.associate = function (models) {
    //     // We're saying that a Post should belong to an Author
    //     // A Post can't be created without an Author due to the foreign key constraint
    //     VolunteerProfile.belongsTo(models.User, {
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     });
    // };


    return NonProfitProfile;
};