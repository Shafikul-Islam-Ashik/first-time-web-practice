
//preloader
/*
let loader = document.querySelector('#preloader');
window.addEventListener('load', function(){
  loader.style.display = 'none';
})
*/



//header_sticky_bg

let header = document.querySelector('.header-section');

let h_logo = document.querySelector('.header-logo');

window.onscroll = function() {
  if (window.pageYOffset >= h_logo.offsetTop) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
} 



//sidebar_menu

let m = document.querySelector('.m-icon');
let c = document.querySelector('.close-bar');
let nav = document.querySelector('.nav');


m.onclick = function open(){
  nav.style.opacity = "1";
  nav.style.visibility = "visible";
  nav.style.transform = "scaleX(1)";

}

c.onclick = function close() {
  nav.style.opacity = "0";
  nav.style.visibility = "hidden";
  nav.style.transform = "scaleX(0)";

}


//auto_type

let typed = new Typed('.autoText', {
  strings: ['web developer','freelancer','web designer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})



//slider

const contents = document.querySelectorAll('.contenta');
let count = 1;
setInterval(() => {
  count++;
 let active = document.querySelector('.active');
 active.classList.remove('active');
  if (count > contents.length) {
    contents[0].classList.add('active');
    count = 1;
    } else {
    active.nextElementSibling.classList.add('active');
  }
  },3000);



//popup

document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.popup').style.transform = 'scale(0)';
})

window.addEventListener('load', function () {
  setTimeout(function open(event){
    document.querySelector('.popup').style.transform = 'translate(-50%, -60%) scale(1)';
  }, 5000)
})





