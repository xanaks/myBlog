let like = document.querySelector('.btn-likes');
let likesCount = document.querySelector('.likes-count');

like.onclick = function () {

  if (like.classList.contains('added')) {
    likesCount.textContent--;
    
  } else {
   likesCount.textContent++;
   
  }

  like.classList.toggle('added');
 
};
