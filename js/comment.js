

let commentField = document.querySelector(".message-input");

let formComment = document.querySelector(".comments-form");
let btnPost = document.querySelector('.button-com');
let listComments = document.querySelector(".comments-list");
let commentName = document.querySelector(".name-input");
let commentEmail = document.querySelector(".email-input");
let charCounter = document.querySelector(".char-counter")



function createEvement (nameTag, classes, content = undefined) {
  let newItem = document.createElement(nameTag);
  for (let className of classes) {
    newItem.classList.add(className);
  }
  if (content !== undefined) {
    newItem.textContent = content;
  }
  return newItem;
}



formComment.onsubmit = function(evt) {

  evt.preventDefault();

  let newComment = createEvement('li', ['comments-item']);
  let commentWrap = createEvement('div', ['comment-wrap']);

  commentWrap.append(createEvement('img', ['comment-avatars']));
  commentWrap.append(createEvement('p', ['comment-name'], commentName.value));
  newComment.append(commentWrap);
  newComment.append(createEvement('div', ['comment-text'], commentField.value));

 
  listComments.append(newComment);

  commentName.value = '';
  commentEmail.value= '';
  commentField.value= '';
  };



  commentField.oninput = function () {
  charCounter.textContent = commentField.value.length;

  if (commentField.value.length > 200 || commentField.value.length < 10) {
    formComment.classList.add('warning');
    btnPost.disabled = true;
  } else {
    formComment.classList.remove('warning');
    btnPost.disabled = false;
  }
};