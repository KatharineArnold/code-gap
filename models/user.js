module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
                notNull: true
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true,
                notNull: true
            }
        },
        image: {
            type: DataTypes.STRING,
            allowNull: true,

        }
    });

    User.associate = function (models) {
        User.hasOne(models.VolunteerProfile, {
            onDelete: "cascade"
        });
    };
    return User;
};
