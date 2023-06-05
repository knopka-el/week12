const nameInput = document.getElementById('name-input');
const avatarInput = document.getElementById('avatar-input');
const commentInput = document.getElementById('comment-input');
const resultLink = document.getElementById('result-link');
const resultName = document.getElementById('result-name');
const resultComment = document.getElementById('result-comment');
const radio = document.getElementById('no');
const date = new Date().toLocaleString();
const divTime = document.querySelector('#result-time');
divTime.textContent = date;


function transformName(name) {
  let newName = name.slice();
  newName = newName.trim();
  newName = newName.charAt(0).toUpperCase() + newName.slice(1).toLowerCase();
  return newName;

}
const defaultAvatars = [
  "https://e7.pngegg.com/pngimages/763/868/png-clipart-kitten-siamese-cat-veterinarian-tonkinese-cat-kitten-cat-like-mammal-animals.png",
  "https://s1.1zoom.ru/big3/497/Cats_White_background_496220.jpg",
  "https://www.pngitem.com/pimgs/m/121-1211025_cat-funny-face-png-transparent-png.png",
  "https://www.vippng.com/png/full/68-685163_cat-png-.png",
  "https://www.vippng.com/png/full/68-685163_cat-png-.png",
  "https://steamuserimages-a.akamaihd.net/ugc/1859423535644353766/C07CD27FD9C75DA8A73D88DFE1738415993B4D26/?imw=512&amp;imh=586&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true"
];

function sendAll() {
  const name = nameInput.value;
  const avatar = avatarInput.value;
  const comment = commentInput.value;
  const transformedName = transformName(name);
  const transformedComment = checkSpam(comment);
  resultLink.src = avatar;
  resultName.innerText = transformedName;
  if (avatar) {
    resultLink.src = avatar;
  } else {
    const randomAvatar = defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
    resultLink.src = randomAvatar;
  }
  resultComment.innerText = transformedComment;
  if (avatar) {
    resultLink.src = avatar;
  } else {
    const randomAvatar = defaultAvatars[Math.floor(Math.random() * defaultAvatars.length)];
    resultLink.src = randomAvatar;
  }
}

function checkSpam(str) {
  const lowerCaseStr = str.toLowerCase();
  const replacedStr = lowerCaseStr.replace('viagra', '***').replace('xxx', '***');
  return replacedStr;
}


const button = document.querySelector('button');
button.addEventListener('click', sendAll);
button.addEventListener('click', toggleName)



function toggleName() {
  const showName = document.querySelector('input[name="showName"]:checked').value;
  if (showName === "No" && name === "") {
    resultName.innerText = "Username";
  } else {
    resultName.innerText = transformName(nameInput.value);
  }
}

