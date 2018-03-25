
var watchFlag = function(obj,funcArr,paramArr){
    if (funcArr.length !== paramArr.length){
        return undefined;
    }
    Object.defineProperty(obj,'watcherFlag',{
        set:function(val){
            if (val === true){
                for (let i = 0; i < funcArr.length; i++){
                    funcArr[i](paramArr[i]);
                }
                console.log(obj.watchFlag);
                obj.watchFlag = false;
            }
        }
    });
};

export default watchFlag;