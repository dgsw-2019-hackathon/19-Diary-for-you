module.exports = function (sequelize, DataTypes) {
    const user = sequelize.define('user', {
      numberId: { 
        field: 'numberId', 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true 
      },
      id: { 
        field: 'id', 
        type: DataTypes.STRING,
        primaryKey: true, 
        allowNull: false
      },
      password: { 
        field: 'password', 
        type: DataTypes.STRING, 
        allowNull: false 
      },
      name: { 
        field: 'name',
        type: DataTypes.STRING, 
        allowNull: false 
      },
      profileImg: { 
        field: 'profileImg', 
        type: DataTypes.STRING, 
        allowNulll: false 
      }
    }, {
      underscored: true,
      timestamps: false,
      freezeTableName: true,
      tableName: 'user'
    });
  
    return user;
};