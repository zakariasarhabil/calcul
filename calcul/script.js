function insert(num) {
    var input = document.formos.textinput;
    var output = input.value;
input.value = output+num;}

function math() {
    var input = document.formos.textinput;
    var output = input.value;
    if(output){
        input.value = eval(output);
    } }
function cleare() {
    var input = document.formos.textinput; 
    input.value = null;}