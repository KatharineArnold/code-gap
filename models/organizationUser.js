module.exports = function (sequelize, DataTypes) {
    let OrganizationUser = sequelize.define('OrganizationUser', {
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            }
        }
    });
    return OrganizationUser;
}

