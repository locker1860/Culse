var updateSummary = function(res){
    if(typeof res['idle'] ==="number" && typeof res['building'] === "number"){
        document.querySelector("#idle-count").innerHTML = res['idle'];
        document.querySelector("#building-count").innerHTML = res['building'];
    }
} 

export default updateSummary;