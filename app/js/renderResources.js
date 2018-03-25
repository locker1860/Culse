
import Data from "./data";
var renderResource = function(id, resources){
    let str = [];
    var idGetter = (function(id){
        let idChecker= id;
        return ()=>idChecker;
    })(id);
    for (let i of resources){
        let selected = (function(i){
            let selectedChecher = i;
            return ()=>selectedChecher;
        })(i);
        let curr = `
            <span class="resourceItem">
                ${i} <span class="icon-close" data-id="${id}"></span>
            </span>
        `;
        let el = document.createElement("div");
        el.innerHTML = curr;
        el.firstElementChild.addEventListener('click',()=>{
            let idResult = idGetter();
            let resourceResult =selected();
            Data.deleteResource(idResult,resourceResult);
            console.log(idResult + resourceResult)
            console.log(Data.showData());
        });
        str.push(el.firstElementChild);
    }
    return str;
}

export default renderResource;