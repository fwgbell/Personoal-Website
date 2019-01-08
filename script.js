const findOutMore = document.getElementsByClassName('find-out-more')[0];
const nav = document.getElementsByTagName('nav')[0];
const about = document.getElementById('about');

findOutMore.addEventListener('click', function(){
  nav.scrollIntoView();
});

const windowHeight = window.innerHeight;
const height = nav.scrollHeight + windowHeight;

window.addEventListener('scroll', function(){
  const scrollAmount = window.scrollY;
  if(scrollAmount > height){
    nav.style.position = 'fixed';
    about.style.marginTop = '90px';
    setTimeout(function(){
      nav.style.top = '0';
    }, 200);
  }
  if(scrollAmount < height - 90){
    nav.style.position = 'static';
    nav.style.top = '-90px';
    about.style.marginTop = '0';
  }
});
