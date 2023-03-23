const container = document.getElementById("container");

for(let i = 0;i < 64;i++){
   container.appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'black' : 'white';
   
}