import Data from "../app/js/data";
describe('data test',() => {
        // describe('data show test',() => {
        //     it('it can show data by id',() => {
        //         let answer = {
        //             system: 'windows',
        //             domian: 'bjstdmngbgr01.thoughtworks.com',
        //             status: 'idle',
        //             ip: '192.168.1.102',
        //             url:'/var/lib/cruise-agent',
        //             resource: ['Firefox','Safari', 'Ubuntu','Chrome']
        //         };
        //         let result = Data.getProjectById('1');
        //         expect(result).toEqual(answer);
        //     });
        // });
        
        describe('data object test',()=>{
            it ('it should be able to update',() =>{
                Data.updateProjectById('1','resource',['1','2','3']);
                expect(Data.getProjectById('1').resource).toEqual(['1','2','3']);
            });
        });
  
});


describe('data object rescource delete test',() =>{
    
    beforeEach(()=>{
        Data.updateProjectById('1','resource',['1','2','3']);
    })
    it('test if last update remains',()=>{
        expect(Data.getProjectById('1').resource).toEqual(['1','2','3']);
    });

    it('resource can be deleted',() =>{
        Data.deleteResource('1','1');
        expect(Data.getProjectById('1').resource
        ).toEqual(['2','3']);
    })
    it('resource can be deleted',() =>{
        Data.deleteResource('1','2');
        expect(Data.getProjectById('1').resource
        ).toEqual(['1','3']);
    })
});

describe('data object resource adding test',() =>{
    beforeEach(() => {
        Data.updateProjectById('1','resource',['1','2','3']);
    })

    it('resource can be added',() =>{
        Data.addResource('1',['5','4']);
        expect(Data.getProjectById('1').resource).toEqual(['1','2','3','5','4']);
    })
})