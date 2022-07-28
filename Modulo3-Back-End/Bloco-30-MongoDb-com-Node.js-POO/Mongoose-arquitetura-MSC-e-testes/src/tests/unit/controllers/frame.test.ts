
import { expect } from 'chai';
import * as sinon from 'sinon';
import { NextFunction, Request, Response } from 'express';
import FrameController from '../../../controllers/Frame';
import FrameService from '../../../services/Frame';
import FrameModel from '../../../models/Frame';
import { frameMock1, frameMockEWithId } from '../../mocks1/frameMock';

describe('Frame Controller',() => {
    const frameModel = new FrameModel()
    const frameService = new FrameService(frameModel);
    const frameController = new FrameController(frameService);
     // fazemos o cast de um objeto para um `Request` pois nosso controller só vai aceitar um objeto do tipo `Request` como primeiro parâmetro
     const req = {} as Request;
     // o mesmo acontece com o segundo parâmetro
     const res = {} as Response;

     before(() => {
         sinon.stub(frameService, 'create').resolves(frameMock1);
         sinon.stub(frameService, 'readOne').resolves(frameMock1);

         res.status =  sinon.stub().returns(res);
         res.json = sinon.stub().returns(res);
     })
     after(() => {
         sinon.restore()
     })

     describe('Create Frame', () => {
         it('Sucess', async () => {
             req.body = frameMock1;
             await frameController.create(req,res);
              // o cast de `res.status` é feito pois `res` foi criado como do tipo `Resquest` 
      // e agora, que queremos validar com o que foi chamado, precisar ser tratado como um `sinon.SinonStub`
      expect((res.status as sinon.SinonStub).calledWith(201)).to.be.true;
      expect((res.json as sinon.SinonStub).calledWith(frameMock1)).to.be.true;
         });
     });
     describe('ReadOne Frame', () => {
         it('Sucess', async () => {
            // como fizemos o dublê da service o valor do `req.params.id` não vai chegar na model
            // logo ele só precisa ser um string e existir
            req.params = {id: frameMockEWithId._id};
            await frameController.readOne(req,res);
            expect((res.status as sinon.SinonStub).calledWith(200)).to.be.true;
            expect((res.json as sinon.SinonStub).calledWith(frameMock1)).to.be.true;
         })
     })
})


