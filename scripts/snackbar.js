function snackbar(message, idName) {
     //remove previous messages.
    let existingNode = document.getElementById(idName);
    if(existingNode.childElementCount) {
        document.getElementById(idName).innerHTML = "";
    }
   
    //append a <p> to the <div> element showing the message.
    let node = document.createElement("P");
    let textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.getElementById(idName).appendChild(node);

    //Show the message.
    let x = document.getElementById(idName);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
