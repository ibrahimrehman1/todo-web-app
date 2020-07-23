var y = document.getElementById("unordered");
function add(){
    let x = document.getElementById("todo-item").value;
    document.getElementById("todo-item").value = "";
    if (x.length === 0){
        alert("Please Enter a Task!");
        return;
    }
    else{
        let li = document.createElement("li");
        let txt = document.createTextNode(x);
        let del = document.createElement("button");
        let edit = document.createElement("button");
        let txt_3 = document.createTextNode("Edit");
        edit.appendChild(txt_3);
        edit.setAttribute("onclick", "edit(this)");
        edit.style.marginLeft = "10px"
        let txt_2 = document.createTextNode("Delete");
        del.setAttribute("onclick", "del(this)");
        del.style.marginLeft = "10px"
        del.appendChild(txt_2);
        li.appendChild(txt);
        y.appendChild(li);
        li.appendChild(del);
        li.appendChild(edit);
        x
    }
}

function del(e){
    e.parentNode.remove()
}

function edit(g){
    while (true){
        let latest = prompt("Enter new Value: ");
        try{
            if (latest.length >= 1){
                g.parentNode.childNodes[0].nodeValue = latest;
                break;
            }
        }
        catch{
            break;
        }
    }
}