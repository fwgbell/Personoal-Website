const findOutMore = document.getElementsByClassName('find-out-more')[0];
const nav = document.getElementsByTagName('nav')[0];
const about = document.getElementById('about');

findOutMore.addEventListener('click', function(){
  nav.scrollIntoView();
});

const aboutHeight = about.scrollHeight;

window.addEventListener('scroll', function(){
  const scrollAmount = window.scrollY;
  if(scrollAmount > aboutHeight){
    nav.style.position = 'fixed';
  } else {
    nav.style.position = 'static';
  }
});
