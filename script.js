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

const project = document.getElementsByClassName('project')[0];
const projectPreviews = document.getElementsByClassName('project-previews')[0];
const stp = document.getElementById('STP-preview');
const fs = document.getElementById('FS-preview');
const fg = document.getElementById('FG-preview');
const jim = document.getElementById('JIM-preview');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const slide4 = document.getElementById('slide4');
const slide4Stp = document.getElementById('slide4-STP');
const captions = document.getElementsByClassName('caption');
const projectTitle = document.getElementById('project-title');
const descriptionText = document.getElementsByClassName('description-text');
const projectLink = document.getElementById('project-link');
const projectGit = document.getElementById('project-git');

stp.addEventListener('click', function(){
  slideIndex = 1;
  showSlides(1);
  project.style.display = 'flex';
  projectPreviews.style.visibility = 'hidden';
  slide1.src='https://i.imgur.com/ptv8Pz6.jpg';
  slide2.src='https://i.imgur.com/bXmdg00.jpg';
  slide3.src='https://i.imgur.com/aP6lgBp.png';
  slide4.style.display = 'none';
  slide4Stp.style.display = 'flex';
  captions[0].innerHTML = 'Save The Pitch\'s Home Page';
  captions[1].innerHTML = 'Pitch Map';
  captions[2].innerHTML = 'A User\'s Profile';
  captions[3].innerHTML = 'Mobile Views Of Swiping Page And Messaging Page';
  projectTitle.innerHTML = 'Save The Pitch';
  descriptionText[0].innerHTML='The aim with Save the Pitch was to create an app that would get young people away from their screens and out onto the pitches, playgrounds and cages of inner city London.';
  descriptionText[1].innerHTML='Through mapping and photographing these pitches I aimed to open them up to new players and make them inviting, attractive and accessible. I hoped to use technology to get people out there to join games and kick-abouts.';
  descriptionText[2].innerHTML='This was my fourth and final project from my time at General Assembly, built on my own in just under a week. The application was made using an Express back-end and React front-end using several node modules such as leaflet and moment, to make the most of mapping and timings respectively.';
  projectLink.href='https://save-the-pitch.herokuapp.com/';
  projectGit.href='https://github.com/fwgbell/wdi-project-four';
});

fs.addEventListener('click', function(){
  slideIndex = 1;
  showSlides(1);
  project.style.display = 'flex';
  projectPreviews.style.visibility = 'hidden';
  slide1.src='https://i.imgur.com/znrZfl6.png';
  slide2.src='https://i.imgur.com/M2PMxNh.jpg';
  slide3.src='https://i.imgur.com/ffUWUdQ.png';
  slide4.src='https://i.imgur.com/GiKTuVr.png';
  captions[0].innerHTML = 'Film Spotting\'s Home Page';
  captions[1].innerHTML = 'Film Index Page';
  captions[2].innerHTML = 'A Film\'s Show Page';
  captions[3].innerHTML = 'A User\'s Review Feed';
  projectTitle.innerHTML = 'Film Spotting';
  descriptionText[0].innerHTML='My third project on the course was done in a group. We were tasked with creating a fully RESTful web app using an AngularJS front-end. As a team we came up with Film Spotting, a movie database, social media mashup to see what films the people you follow rate highly.';
  descriptionText[1].innerHTML='Working in a group was challenging at first as we didn’t have as much freedom to code as we did with previous projects. However after learning to divide the work up and figuring out how to code in way we all agreed with, this project was really enjoyable and I’m proud of what our group was able to produce.';
  descriptionText[2].innerHTML='Having the most experience with social media features from my previous project I focused mostly on those, implementing the following, likes and reviews, as well as writing the functions to populate the feed with content.';
  projectLink.href='https://film-spotting.herokuapp.com/#!/';
  projectGit.href='https://github.com/fwgbell/wdi-project-3';
});

fg.addEventListener('click', function(){
  slideIndex = 1;
  showSlides(1);
  project.style.display = 'flex';
  projectPreviews.style.visibility = 'hidden';
  slide1.src='https://i.imgur.com/hwYJXZM.png';
  slide2.src='https://i.imgur.com/Ux2xOKg.png';
  slide3.src='https://i.imgur.com/52SRL90.png';
  slide4.src='https://i.imgur.com/xv33doC.png';
  captions[0].innerHTML = 'A User\'s Profile Page';
  captions[1].innerHTML = 'The Explore Page';
  captions[2].innerHTML = 'The Top Of A User\'s Feed';
  captions[3].innerHTML = 'A Post\'s Show Page';
  projectTitle.innerHTML = 'Fredstagram';
  descriptionText[0].innerHTML='For project 2 at General Assembly I was tasked with producing an Instagram clone. During the module leading up to this task we’d covered Node.JS, Express.JS and EJS so I started by using those to create a fully restful site for uploading photos.';
  descriptionText[1].innerHTML='Once I was happy with that I started to work on registration and authentication. Then having reached a minimum viable product I spent the final few days working on more of the “Instagram like” features (likes, comments, following, etc).';
  descriptionText[2].innerHTML='I was pleased with how much I was able to recreate with only a weeks experience with the chosen technologies and I’m happy with the finished product.';
  projectLink.href='https://fredstagram.herokuapp.com/';
  projectGit.href='https://github.com/fwgbell/wdi-project-two';
});

jim.addEventListener('click', function(){
  slideIndex = 1;
  showSlides(1);
  project.style.display = 'flex';
  projectPreviews.style.visibility = 'hidden';
  slide1.src='https://i.imgur.com/09WmkyU.png';
  slide2.src='https://i.imgur.com/afr6H2N.png';
  slide3.src='https://i.imgur.com/3mmZueg.png';
  slide4.src='https://i.imgur.com/VUfqKrp.png';
  captions[0].innerHTML = 'Jungle Is Massive\'s Start Screen';
  captions[1].innerHTML = 'The Select Troops Screen';
  captions[2].innerHTML = 'A Screenshot Of Gameplay';
  captions[3].innerHTML = 'Player One\'s Victory Screen';
  projectTitle.innerHTML = 'Jungle Is Massive';
  descriptionText[0].innerHTML='This was my first project at General Assembly. The brief for this project was to build a grid based game using JavaScript. I decided on my idea because I wanted my project to have an easily achievable M.V.P. but enough depth that I could keep adding features to it.';
  descriptionText[1].innerHTML='Once I started coding I spent a long time working on how my grid was generated and how the game was setup to ensure that the fundamentals of the gameplay were solid before moving on.';
  descriptionText[2].innerHTML='I then used the rest of the week I had for this project to add more features to it, to make gameplay more complex and varied, as well as adding animations and sounds to make the game feel more polished.';
  projectLink.href='https://fwgbell.github.io/wdi-project-one/';
  projectGit.href='https://github.com/fwgbell/wdi-project-one';
});

const closeIcon = document.getElementById('close-icon');

closeIcon.addEventListener('click', function(){
  project.style.display = 'none';
  projectPreviews.style.visibility = 'visible';
  slide4.style.display = 'block';
  slide4Stp.style.display = 'none';
});


// functions for slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(' active', '');
  }
  slides[slideIndex-1].style.display = 'block';
  dots[slideIndex-1].className += ' active';
}
