import renderResource from "./renderResources";
import setModalBeforeShow from "./modal";

var color = {idle:'#cce8b5', building :'#fffbb9'};

var render = function(data){
    let str = [];
    for (let i of data){
        let data = i.data;
        let res = renderResource(i.id, data.resource);
        let crrNode = `
        <div class="detail-box" style="background-color: ${color[data.status]}">
            <div class="icon"></div>
            <div class="project">
                <div class="info">
                    <span class="project-name">${data.domian}</span>
                    |<span class="status">${data.status}</span>
                    |<span class="ip">${data.ip}</span>
                    |<span class="url">${data.url}</span>
                </div>
                <div class="resources">
                    <span class="add-resource">
                        <span class="icon-plus"></span>
                        <span class="underline" data-id="${i.id}"> Specify Resource</span>
                    </span>
                    |<span> Resources: </span>
                    <span class="resource-list"></span>
                </div>
            </div>
        </div>
        `;
        let el = document.createElement("div");
        el.innerHTML = crrNode;
        el.querySelector(".underline").addEventListener('click',(e)=>{
            let currId = i.id;
            let top = e.currentTarget.offsetTop;
            let left = e.currentTarget.offsetLeft;
            let modal = document.getElementById('addResourceModal');
            setModalBeforeShow(currId, top, left);
            modal.style.display = "block";
        });
        for(let i of res){
            el.querySelector(".resource-list").appendChild(i);
        }
        str.push(el.firstElementChild);
    }
    document.querySelector(".details").innerHTML = '';
    for (let i of str){
        document.querySelector(".details").appendChild(i);
    }
    
    return str;
}

export default render;