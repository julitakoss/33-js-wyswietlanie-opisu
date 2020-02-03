let opis= document.getElementById("opis");
let button = document.querySelector('button');

console.log(opis);

button.onclick = function(){
    opis.textContent = 'Akademia 108';
}