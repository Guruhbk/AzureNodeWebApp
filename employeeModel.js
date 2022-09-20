import {
  sequelize
} from './dbConfig.js';
import pkg from 'sequelize';
const {
  Model,
  DataTypes,
  Sequelize
} = pkg;
export class EmployeeModel extends Model {}

EmployeeModel.init({
  id: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING(100),
  },
  age: {
    type: DataTypes.INTEGER,
  },
  gender: {
    type: DataTypes.STRING(6)
  },
  address: {
    type: DataTypes.STRING(100),
  },
  mobileNo: {
    type: DataTypes.BIGINT,
  },
  role:{
    type: DataTypes.STRING(100),
    allowNull:true
  },
  active:{
    type: DataTypes.BOOLEAN,
    allowNull:true
  },
  createdBy: {
    type: DataTypes.STRING(100),
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  profilePic: {
    type: DataTypes.STRING(500),
    allowNull: true

  },
  updatedBy: {
    type: DataTypes.STRING(100),
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  sequelize: sequelize.sequelize,
  tableName: 'employeeDetails5',
  timestamps: true,
});