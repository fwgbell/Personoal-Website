const findOutMore = document.getElementsByClassName('find-out-more')[0];
const welcome = document.getElementById('welcome');
const nav = document.getElementsByTagName('nav')[0];
const navItems = document.getElementsByClassName('nav-item');
const navLines = document.getElementsByClassName('nav-item-line');
const about = document.getElementById('about');
const aboutMe = document.getElementsByClassName('about-me')[0];
const aboutSkills = document.getElementsByClassName('about-skills')[0];
const projects = document.getElementById('projects');

findOutMore.addEventListener('click', function(){
  nav.scrollIntoView();
});

const windowHeight = window.innerHeight;
const height = nav.scrollHeight + windowHeight;

window.addEventListener('scroll', function(){
  const scrollAmount = window.scrollY;

  //if viewing below nav
  if(scrollAmount > height){
    nav.style.position = 'fixed';
    about.style.marginTop = '90px';
    setTimeout(function(){
      nav.style.top = '0';
    }, 200);
  }

  //if viewing above nav
  if(scrollAmount < height - 90){
    nav.style.position = 'static';
    nav.style.top = '-90px';
    about.style.marginTop = '0';
  }

  // if viewing welcome section
  if(scrollAmount < welcome.scrollHeight - windowHeight / 2){
    for(let i = 0; i < 4; i++){
      navItems[i].classList.remove('selected');
      navLines[i].classList.remove('selected-line');
    }
    navItems[0].classList.add('selected');
    navLines[0].classList.add('selected-line');
  }

  // if viewing about section
  if(scrollAmount > welcome.scrollHeight -10){
    for(let i = 0; i < 4; i++){
      navItems[i].classList.remove('selected');
      navLines[i].classList.remove('selected-line');
    }
    navItems[1].classList.add('selected');
    navLines[1].classList.add('selected-line');
    aboutMe.style.left = '0';
    aboutSkills.style.left = '0';
    const skills = document.getElementsByTagName('li');
    let i = 0;
    setInterval(function(){
      if(i < skills.length) skills[i].style.left = '0';
      i++;
    }, 100);
  }

  // if viewing projects section
  if(scrollAmount > welcome.scrollHeight + about.scrollHeight){
    for(let i = 0; i < 4; i++){
      navItems[i].classList.remove('selected');
      navLines[i].classList.remove('selected-line');
    }
    navItems[2].classList.add('selected');
    navLines[2].classList.add('selected-line');
  }

  // if viewing contact section
  if(scrollAmount > welcome.scrollHeight + about.scrollHeight + projects.scrollHeight){
    for(let i = 0; i < 4; i++){
      navItems[i].classList.remove('selected');
      navLines[i].classList.remove('selected-line');
    }
    navItems[3].classList.add('selected');
    navLines[3].classList.add('selected-line');
  }
});
