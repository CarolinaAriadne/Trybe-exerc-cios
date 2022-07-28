import IFrame from '../../interfaces/Frame';

const frameMock1:IFrame = {
    material: 'Ouro',
    color: 'Daquele naipe',
};

const frameMockEWithId:IFrame & {_id:string} = {
    _id:'62cf1fc6498565d94eba52cd',
    material: 'Ouro',
    color: 'Daquele naipe',
};

const frameMockForChange:IFrame = {
    material: 'Ouro com adamantium',
    color: 'ouro brilhante',
}

const frameMockForChangeWithId:IFrame & {_id: string} ={
    _id: '62cf1fc6498565d94eba52cd',
    material: 'Ouro com adamantium',
    color: 'ouro brilhante',
}

export {
     frameMock1,
     frameMockEWithId,
     frameMockForChange,
     frameMockForChangeWithId,
}