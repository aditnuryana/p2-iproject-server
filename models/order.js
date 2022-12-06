"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.Product);
      Order.belongsTo(models.User);
    }
  }
  Order.init(
    {
      UserId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "UserId is required",
          },
          notNull: {
            msg: "UserId is required",
          },
        },
      },
      ProductId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "ProductId is required",
          },
          notNull: {
            msg: "ProductId is required",
          },
        },
      },
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Status is required",
          },
          notNull: {
            msg: "Status is required",
          },
          isIn: {
            args: [["Paid", "Unpaid"]],
            msg: "Status must be paid/unpaid",
          },
        },
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "ProductId is required",
          },
          notNull: {
            msg: "ProductId is required",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};