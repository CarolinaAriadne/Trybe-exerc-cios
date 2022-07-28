import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import {Model} from 'mongoose';
import {
    frameMock,
    frameMockEWithId,
    frameMockForChange,
    frameMockForChangeWithId,
} from '../../mocks1/frameMock';

describe('Frame Model', () => {
    const frameModel = new FrameModel();

    before(() => {
        sinon.stub(Model, 'create').resolves(frameMockEWithId);
        sinon.stub(Model, 'findOne'). resolves(frameMockEWithId);
        sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockForChangeWithId);

    })

    after(()=> {
        sinon.restore();
    })

    describe('creating a frame', () => {
        it('sucessfully created', async () => {
            const newFrame = await  frameModel.create(frameMock);
            expect(newFrame).to.be.deep.equal(frameMockEWithId);
        })
    })
    describe('searching a frame', () => {
		it('successfully found', async () => {
			const frameFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(frameFound).to.be.deep.equal(frameMockEWithId);
		});

		it('_id not foun', async () => {
            try{
                await frameModel.readOne('123ERRADO');
            }catch(error:any){
                expect(error.message).to.be.eq('Invalid MongoId')
            }
        })
	});
    describe('changing a frame', () => {
		it('successfully changed', async () => {
			const framesChanged = await frameModel.update('62cf1fc6498565d94eba52cd', frameMockForChange);
			expect(framesChanged).to.be.deep.equal(frameMockForChangeWithId);
		});

		it('_id not found to change', async () => {
			try {
				await frameModel.update('123ERRADO', frameMockForChange);
			} catch (error: any) {
				expect(error.message).to.be.eq('Invalid MongoId');
			}
		});
	});
    
})

