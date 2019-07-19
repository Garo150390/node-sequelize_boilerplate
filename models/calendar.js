module.exports = (sequelize, DataTypes) => {
  const Calendar = sequelize.define('Calendar', {
    firstName: DataTypes.STRING,
  }, {});

  Calendar.associate = function(models) {
    // associations can be defined here
  };
  return Calendar;
};
