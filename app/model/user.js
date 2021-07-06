'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const User = app.model.define('user', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    username: STRING,
    password: STRING,
    avatar: STRING,
    sign: STRING,
    createTime: DATE,
    updateTime: DATE,
    isDelete: {
      type: BOOLEAN,
      dafaultValue: false,
      get() {
        const val = this.getDataValue('isDelete');
        return val === 1;
      },
      set(val) {
        this.setDataValue('isDelete', val ? 1 : 0);
      },
    },
  });

  return User;
};
