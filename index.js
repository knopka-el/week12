
const nameInput = document.getElementById('name-input');
const avatarInput = document.getElementById('avatar-input');
const commentInput = document.getElementById('comment-input');
const resultLink = document.getElementById('result-link');
const resultName = document.getElementById('result-name');
const resultComment = document.getElementById('result-comment');


function transformName(name) {
  name = name.trim();
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  return name;
}

function sendAll() {
  const name = nameInput.value;
  const avatar = avatarInput.value;
  const comment = commentInput.value;
  const transformedName = transformName(name);
  const transformedComment = checkSpam(comment);
  resultLink.src = avatar;
  resultName.innerText = transformedName;
  resultComment.innerText = transformedComment;
  const result = document.querySelector('.result');
}

function checkSpam(str) {
  const lowerCaseStr = str.toLowerCase();
  const replacedStr = lowerCaseStr.replace('viagra', '***').replace('xxx', '***');
  return replacedStr;
}





