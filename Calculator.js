let  display = document.getElementById("display-input");

function functionality(btn){
    if(display.value == "" && ( btn.value == "/" || btn.value == "*" || btn.value == "-" || btn.value == "+")){
        display.value+="";
    }else{
        display.value += btn.value; 

    }
}

function resultFunction(){
    if(display.value){
        display.value= eval(display.value);
    }
}

function clearFunction(){
    display.value = "";
}

function backFunction(){
    display.value = display.value.slice(0,-1)
}