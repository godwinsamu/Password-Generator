let passBox= document.getElementById("pass");
let len = 12;
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let number = "0123456789";
let symbols = "@#$%^&*()_+~|}{[]></-=";
let allChar = uppercase + lowercase + number + symbols;
function Passkey(){
    let pass= "";
    pass += uppercase[Math.floor(Math.random() * uppercase.length)];
    pass += lowercase[Math.floor(Math.random() * lowercase.length)];
    pass += number[Math.floor(Math.random() * number.length)];
    pass += symbols[Math.floor(Math.random() * symbols.length)];
    while(len > pass.length){
        pass += allChar[Math.floor(Math.random() * allChar.length)];
    }
    passBox.value = pass;
}

