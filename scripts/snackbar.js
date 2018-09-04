function snackbar(message, idName) {
    //append a <p> to the <div> element showing the message.
    var node = document.createElement("P");
    var textnode = document.createTextNode(message);
    node.appendChild(textnode);
    document.getElementById(idName).appendChild(node);

    //Show the message.
    var x = document.getElementById(idName);
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
