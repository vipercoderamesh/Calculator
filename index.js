function display(value){
    document.getElementById('textarea').value+=value;

}

function calculate(){
    var newvalue=document.getElementById('textarea').value
    var total=eval(newvalue);
    document.getElementById('textarea').value=total;
}
function clr(){
    document.getElementById('textarea').value="";

}