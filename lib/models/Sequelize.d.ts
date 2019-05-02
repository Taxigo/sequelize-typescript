import 'reflect-metadata';
//import SequelizeOrigin = require('sequelize-v5');
import {Sequelize as SequelizeOrigin} from 'sequelize-v5'
import {Model} from "./Model";
import {ModelMatch, SequelizeConfig} from '../types/SequelizeConfig';
import {ISequelizeValidationOnlyConfig} from "../interfaces/ISequelizeValidationOnlyConfig";

export declare class Sequelize extends SequelizeOrigin {

  _: {[modelName: string]: (typeof Model)};
  connectionManager: any;

  constructor(config: SequelizeConfig | ISequelizeValidationOnlyConfig);
  constructor(uri: string);

  addModels(models: Array<typeof Model>): void;
  addModels(modelPaths: string[], modelMatch?: ModelMatch): void;
}
