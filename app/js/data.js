/**
 * Created by locker on 3/22/2018.
 */
var Data = (function() {
    let store;
    var data =  [
        {
            id:'1',
            data:{
                system: 'windows',
                domian: 'bjstdmngbgr01.thoughtworks.com',
                status: 'idle',
                ip: '192.168.1.102',
                url:'/var/lib/cruise-agent',
                resource: ['Firefox','Safari', 'Ubuntu','Chrome']
            }
        },
        {
            id:'2',
            data:{
                system: 'windows',
                domian: 'bjstdmngbgr02.thoughtworks.com',
                status: 'idle',
                ip: '192.168.1.103',
                url:'/var/lib/cruise-agent',
                resource: ['Firefox','Safari', 'Ubuntu','Chrome']
            }
        },
        {
            id:'3',
            data:{
                system: 'windows',
                domian: 'bjstdmngbgr03.thoughtworks.com',
                status: 'idle',
                ip: '192.168.1.104',
                url:'/var/lib/cruise-agent',
                resource: ['Firefox','Safari', 'Ubuntu','Chrome']
            }
        }
    ];
    function Store(){
        this.watcherFlag = false;
        this.showData = function(){
            return data;
        }
        this.getProjectById = function(id){
            return data.find(e => e.id === id).data;
        }  
        this.updateProjectById = function(id, property, param){
            var currDataIndex = data.findIndex(e => e.id === id);
            if(currDataIndex >= 0){
                data[currDataIndex].data[property] = param;
                this.watcherFlag = true;
            } else {
                console.log("property or id not found!");
            }
        }
        this.deleteResource = function(id,resource){
            var currDataIndex = data.findIndex(e => e.id === id);
            var resIndex = data[currDataIndex].data.resource.indexOf(resource);
            if (resIndex >= 0){
                data[currDataIndex].data.resource.splice(resIndex,1);
                this.watcherFlag = true;
            }
        }
        this.addResource = function(id,resourceArr){
            var currDataIndex = data.findIndex(e => e.id === id);
            var flag = false;
            for (let i of resourceArr){
                let resIndex = data[currDataIndex].data.resource.indexOf(i);
                if (resIndex < 0 && i!==''){
                    data[currDataIndex].data.resource.push(i); 
                    flag = true;
                }
            }
            this.watcherFlag = flag;
        }
        this.statistic = function(){
            var result = {};
            result.idle = 0;
            result.building = 0;
            for (let i of data){
                if(i.data.status == "idle"){
                    result.idle++;
                } else if(i.data.status == "building"){
                    result.building++;
                }
            }
            console.log(result);
            return result;
        }
    }
    return new Store();
})();
export default Data;

