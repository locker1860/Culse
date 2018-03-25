import Data from "./data";
(function(){
    var closeBottomBtn = document.querySelectorAll('.modalButtons div[role=\'button\']');
    var modal = document.getElementById('addResourceModal');
    closeBottomBtn.forEach(function (e) {
        e.onclick = function(){
            modal.style.display = "none";
        };
    });
    window.onclick = function(event){
        if (event.target == modal){
            modal.style.display = "none";
        }
    };
})();

var setModalBeforeShow = function(id, top, left){
    var addButton = document.querySelector("#addResourceModal #modalAddResource");
    addButton.setAttribute("data-addid",id);
    document.querySelector("#addResourceInput").value = "";
    addButton.onclick = function(event){
        var id=event.currentTarget.getAttribute("data-addid");
        var string = document.getElementById('addResourceInput').value;
        string = string.replace(/\s/g, '');
        var arr = string.split(',');
        Data.addResource(id,arr);
        document.getElementById('addResourceModal').style.display = 'none';
    };
    var modalContent = document.querySelector("#addResourceModal .modal-content");
    modalContent.style.top = top + 30 + "px";
    modalContent.style.left = left + "px";
}

export default setModalBeforeShow;