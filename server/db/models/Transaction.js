
/* eslint-disable no-unused-vars */
import { Model, DataTypes } from 'sequelize';
import connection from '../connection';

const initTransaction = (sequelize, DataTypes) => {
  class Transaction extends Model {}
  Transaction.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      value: DataTypes.DOUBLE,
      timestamp: DataTypes.BIGINT,
      receiver: DataTypes.STRING,
      confirmed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
      },
      sender: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Transaction',
      tableName: 'transactions',
    }
  );
  return Transaction;
};

export default initTransaction(connection, DataTypes);
