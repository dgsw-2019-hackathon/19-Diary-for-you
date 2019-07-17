module.exports = function (sequelize, DataTypes) {
    const diary = sequelize.define('diary', {
      diaryId: { 
        field: 'diaryId', 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      userId: { 
        field: 'userId', 
        type: DataTypes.STRING,
        primaryKey: true, 
        allowNull: false
      },
      title: { 
        field: 'title', 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      content: { 
        field: 'content',
        type: DataTypes.STRING, 
        allowNull: false 
      },
      uploadDay: { 
        field: 'uploadDay', 
        type: DataTypes.DATE, 
        allowNulll: false 
      },
      updateDay: {
        field: 'updateDay',
        type: DataTypes.DATE,
        allowNull: true
      },
      weather: {
        field: 'weather',
        type: DataTypes.STRING,
        allowNull: false
      },
      originalName: {
        field: 'originalName',
        type: DataTypes.STRING,
        allowNull: true
      },
      path: {
        field: 'path',
        type: DataTypes.STRING,
        allowNull: true
      },
      open: {
        field: 'open',
        type: DataTypes.BOOLEAN,
        allowNull: true
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'diary'
    });
  
    return diary;
};