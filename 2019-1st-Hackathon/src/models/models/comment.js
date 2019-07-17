module.exports = function (sequelize, DataTypes) {
    const comment = sequelize.define('comment', {
      id: { 
        field: 'id', 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      userId: { 
        field: 'userId', 
        type: DataTypes.STRING, 
        allowNull: false
      },
      userName: { 
        field: 'userName', 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      content: { 
        field: 'content',
        type: DataTypes.STRING, 
        allowNull: false 
      },
      updateDay: { 
        field: 'updateDay', 
        type: DataTypes.DATE, 
        allowNulll: true
      },
      report: {
        field: 'report',
        type: DataTypes.TINYINT(1),
        allowNull: true
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'comment'
    });
  
    return comment;
};