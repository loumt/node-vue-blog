module.exports = (sequelize, DataTypes) => {
  let User = sequelize.define('User', {
      id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: '用户ID'
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '用户名'
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        comment: '密码'
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '手机号'
        // defaultValue:''
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
        comment: '邮件'
      }
    }, {
      timestamps: false,
      tableName: 'BLOG_USER',
      comment: '用户表',
      initialAutoIncrement: 1
    }
  )

  // User.sync({force: false}).then(() => {
  // })
}