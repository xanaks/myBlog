let articles = document.querySelectorAll('.item-larticle');
let filter = document.querySelector('.title-button');
let bigArticle = document.querySelector(".big-list");

filter.onchange = function () {
  for (let article of articles) {
    if (article.dataset.category !== filter.value && filter.value !== 'all') {
      article.classList.add('hidden');
    } 
    else {
      article.classList.remove('hidden');
    }
    if (article.dataset.category == "book" || article.dataset.category == "travel" || article.dataset.category == "city") {
      bigArticle.classList.add('hidden');
  }
     else {
      bigArticle.classList.remove('hidden');
    }
};
