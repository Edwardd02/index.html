document.getElementById("saveAsPDF").addEventListener("click", saveAsPDF);
const specialElementHandlers = {
    '.no-saveAsPDF': function (element, renderer) {
        return true
    }
}

function saveAsPDF() {
    if (document.getElementById("rightClickDelete") !== null){
        document.getElementById("rightClickDelete").remove();
    }
    hasMenu = false;
    const doc = new jsPDF('p', 'px', 'a4');//create doc 'portrait', 'px', 'a4'

    const source = document.getElementById("timetableDiv").innerHTML;
    const margins = {
        top: 10,
        bottom: 10,
        left: 0,
        width: 793.706
    }//set source and margins

    doc.fromHTML(
        source,
        margins.left,
        margins.top, {
            "width": margins.width,
            "elementHandlers": specialElementHandlers
        },
        function (dispose) {
            doc.save("Timetable.pdf");
        }, margins);
//TODO:Styling

}

let hasMenu = false;
window.addEventListener("contextmenu", e => e.preventDefault());
let table = document.getElementById("timetable");//it was working in html file, but now it's null

// 监听鼠标右键按下事件
table.addEventListener("mousedown", function (e) {
    // 如果是鼠标右键按下
    const target = e.target;


    if ((target.innerHTML.trim() !== "")) {
        // 创建一个 div 元素作为右键菜单
        const contextMenu = document.createElement("div");
        contextMenu.className = "context-menu";
        contextMenu.id = "rightClickDelete";

        // 创建菜单项
        const menuItem = document.createElement("div");
        menuItem.innerHTML = `<p id = "deleteAll">Delete All</p><p id = "deleteAll">Delete This</p>`;
        menuItem.children.item(0).addEventListener("click", function () {
            if (document.getElementById("rightClickDelete") !== null){
                document.getElementById("rightClickDelete").remove();
            }
            hasMenu = false;
            var parentElement = target.parentElement;
            while (parentElement && parentElement.tagName !== "TR") {//whatever target is, find the parent of is which is tr so the whole line whould be deleted
                parentElement = parentElement.parentElement;
            }
            if (parentElement && parentElement.tagName === "TR") {
                if(parentElement.id === "doNotRemove")//the first row is day&time, should not be removed
                {
                    const conflict = document.getElementById('timeqoute');
                    conflict.innerHTML = "“Time will not slow down when you were trying to delete it” – Developer";
                }
                else{
                    parentElement.remove();
                }

            }
        });
        menuItem.children.item(1).addEventListener("click", function () {
            if (document.getElementById("rightClickDelete") !== null){
                document.getElementById("rightClickDelete").remove();
            }
            hasMenu = false;
            var parentElement = target;
            while (parentElement && parentElement.tagName !== "TH") {//whatever target is, find the parent of is which is tr so the whole line whould be deleted
                parentElement = parentElement.parentElement;
            }
            if (parentElement && parentElement.tagName === "TH") {
                if(parentElement.className === "time")//the first row is day&time, should not be removed
                {
                    const conflict = document.getElementById('timeqoute');
                    conflict.innerHTML = "“Time will not slow down when you were trying to delete it” – Developer";
                }
                else{
                    parentElement.innerHTML = "";
                }

            }
        });
        if (hasMenu) {
            if (document.getElementById("rightClickDelete") !== null){
                document.getElementById("rightClickDelete").remove();
            }
            // 为了避免多次创建菜单，还需要在隐藏菜单时将菜单从 body 中移除
            hasMenu = false;
        } else {
            if (e.button === 2) {
                // 获取鼠标右键按下的元素


                // 将菜单项添加到菜单中
                contextMenu.appendChild(menuItem);

                // 将菜单添加到 body 中
                document.body.appendChild(contextMenu);

                // 设置菜单的位置
                contextMenu.style.left = e.clientX + "px";
                contextMenu.style.top = e.clientY + "px";

                // 阻止默认的右键菜单弹出
                hasMenu = true;
                // 监听鼠标右键抬起事件，当抬起时隐藏菜单
            }
        }

    }



});
document.addEventListener("click", function () {
    if (document.getElementById("rightClickDelete") !== null){
        document.getElementById("rightClickDelete").remove();
    }
    hasMenu = false;
}, )
