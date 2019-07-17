module.exports = function (sequelize, DataTypes) {
    const friend = sequelize.define('friend', {
      userId: { 
        field: 'userId', 
        type: DataTypes.STRING, 
        primaryKey: true
      },
      friendId: { 
        field: 'friendId', 
        type: DataTypes.STRING,
        primaryKey: true
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'friend'
    });
  
    return friend;
};