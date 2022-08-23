const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button = document.getElementById("button")
let el01 = document.getElementById("el-01")
let el02 = document.getElementById("el-02")
let senha01 = ""
let senha02 = ""

function getPassword(){
    let password = ""
    for(let i = 0; i< 15; i++){
        password += characters[getRandom()]
    }
    return password
}

function getRandom(){
    return Math.floor(Math.random() * characters.length) + 1;
}

senha01 = getPassword()
senha02 = getPassword()

button.addEventListener("click", function(){ 
   el01.textContent = senha01;
   el02.textContent = senha02;
  });
  