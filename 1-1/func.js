var btnClose = document.getElementsByClassName("close");
var list = document.querySelectorAll("#myList li");
var tab = [], liIndex;

for(var i = 0; i < btnClose.length; i++)
{
    tab.push(list[i].innerHTML);
}

for(var i = 0; i < btnClose.length; i++){
            
    btnClose[i].onclick = function(){
        
        liIndex = tab.indexOf(this.parentNode.innerHTML);
        //console.log(this.parentNode.innerHTML + " INDEX = " + liIndex);
        this.parentNode.parentNode.removeChild(this.parentNode);
    };
    
}

for(var i = 0; i < list.length; i++)
{
    list[i].onclick = function()
    {
        if(this.className == "completed")
        {
            this.className = "";
        }
        else
        {
            this.className = "completed";
        }
    }
}


var button = document.getElementById("add");
    button.addEventListener('click', function(){
    
    var node = document.createElement("li");  
    var subBtn = document.createElement('span');
    subBtn.appendChild(document.createTextNode("×"));
    subBtn.className = "close";
    subBtn.onclick = function(){
        
        liIndex = tab.indexOf(this.parentNode.innerHTML);
        this.parentNode.parentNode.removeChild(this.parentNode);
    };
    

    node.innerHTML = document.getElementById("text-data").value;
    node.appendChild(subBtn);
    
    node.onclick = function()
    {
        if(node.className == "completed")
        {
            node.className = "";
        }
        else
        {
            node.className = "completed";
        }
    }


    tab.push(node.innerHTML);

    document.getElementById("myList").appendChild(node);
});


