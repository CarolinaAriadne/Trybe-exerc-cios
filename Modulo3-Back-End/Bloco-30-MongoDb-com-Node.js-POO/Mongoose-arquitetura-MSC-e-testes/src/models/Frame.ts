import { model as mongooseCreateModel, Schema } from 'mongoose';
import MongoModel from './MongoModel';
import IFrame from '../interfaces/Frame';

const frameMongooseSchema = new Schema<IFrame>({
    material: String,
    color: String,
})

class Frame extends MongoModel<IFrame>{
    constructor(model = mongooseCreateModel('Frame', frameMongooseSchema)){
        super(model);
    }
}

export default Frame;