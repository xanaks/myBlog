let charCounter = document.querySelector(".char-counter")
let formComment = document.querySelector(".form-writeMe");
let btnPost = document.querySelector('.form-button');
let commentField = document.querySelector(".area-letter");

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