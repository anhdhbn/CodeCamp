var button = document.getElementById("add");
    button.addEventListener('click', function(){
    
    var data = document.getElementById("text-data").value;
    var node = document.createElement("li");  
    console.log(data);
    var textNode = document.createTextNode(data);
    var subBtn = document.createElement('BUTTON');
    subBtn.appendChild(document.createTextNode("x"));
    subBtn.className = "lBtn";
    node.appendChild(textNode);
    node.appendChild(subBtn);
    document.getElementById("myList").appendChild(node);
})