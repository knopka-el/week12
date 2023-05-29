let nameInput = document.getElementById("name-input").value;
console.log(nameInput);
let avatarInput = document.getElementById("avatar-input").value;
console.log(avatarInput);
let commentInput = document.getElementById("comment-input").value;
console.log(commentInput);


function sendName(){
    nameInput = document.getElementById("name-input").value;
    nameInput = nameInput.replaceAll('', '');
    console.log(nameInput);
    let firstLetter = nameInput[0].toUpperCase();
    let name = nameInput.slice(1).toLowerCase();
    nameInput =  firstLetter + name;
    console.log(nameInput);
    nameInput = document.getElementById("result-name").innerText ;
}

function sendAll(){
document.getElementById("result-link").src = avatarInput;
sendName();
sendComment();

}
function checkSpam(){

}

