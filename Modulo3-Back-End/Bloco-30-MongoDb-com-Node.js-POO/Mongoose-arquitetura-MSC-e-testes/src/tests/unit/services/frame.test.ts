import { expect } from 'chai';
import exp from 'constants';
import * as sinon from 'sinon';
import {ZodError} from 'zod';
import {ErrorTypes} from '../../../errors/catalog';
import FrameModel from '../../../models/Frame';
import FrameService from '../../../services/Frame';
import {frameMock, frameMockEWithId} from '../../mocks1/frameMock';


describe('Frame Service', () => {
    const frameModel = new FrameModel();
    const frameService = new FrameService(frameModel);

    before(() => {
        sinon.stub(frameModel, 'create').resolves(frameMockEWithId);
        sinon.stub(frameModel, 'readOne')
         // na chamada de index 0 `frameModel.readOne` vai responder um fakeFrame
         .onCall(0).resolves(frameMockEWithId)
          // já na próxima chamada ele vai mudar seu retorno, isso pode ser feito várias vezes
          .onCall(1).resolves(null);
    })
    after(() => {
        sinon.restore()
    })

    describe('Create Frame', () => {
        it('Succes', async () =>{
            const frameCreated = await frameService.create(frameMock);

            expect(frameCreated).to.be.deep.equal(frameMockEWithId);
        })

        it('Failure', async () => {
            try{
                // o "as any"(casting) abaixo pois o create não aceita um parâmetro inválido
                await frameService.create({} as any)
            }catch(error){
                expect(error).to.be.instanceOf(ZodError);
            }
        })
    })

    describe('ReadOne Frame', () => {
        it('Sucess', async () => {
            const frameCreated = await frameService.readOne(frameMockEWithId._id);

            expect(frameCreated).to.be.deep.equal(frameMockEWithId);
        })
        it('Failure', async () =>{
            try{
                 // a mesma chamada que o teste acima aqui vai gerar o erro por causa do nosso sinon.stub(...).onCall(1)
                 await frameService.readOne(frameMockEWithId._id);
            }catch(error:any){
                expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound)
            }
        })
    })
})