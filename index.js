const element=document.getElementById("btn");
element.addEventListener("click",function(){
    if(element.innerHTML==="Click me")
    {
        document.getElementById("date").innerHTML=Date();
        element.innerHTML="Hide me";
    }
    else{
        document.getElementById("date").innerHTML="";
        element.innerHTML="Click me";
        
    }
    
})

