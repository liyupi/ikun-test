const { DataTypes } = require("sequelize");
const sequelize = require("../db");

/**
 * 用户得分模型
 * @author yupi
 */
const UserScoreModel = sequelize.define(
  "UserScore",
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    costTime: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    questions: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answers: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createTime: {
      type: DataTypes.DATE,
    },
    updateTime: {
      type: DataTypes.DATE,
    },
  },
  {
    tableName: "user_score",
    paranoid: true,
    deletedAt: "isDelete",
    timestamps: false,
  }
);

module.exports = UserScoreModel;
