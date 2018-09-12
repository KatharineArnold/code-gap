



module.exports = function (sequelize, DataTypes) {
    var VolunteerProfile = sequelize.define("VolunteerProfile", {
        location: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
            }
        },
        availability: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
    });


    VolunteerProfile.associate = function (models) {
        VolunteerProfile.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };


    return VolunteerProfile;
};
