// slider 
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("js-banner-item");
  let dots = document.getElementsByClassName("banner__dots__dot");
  if (n > slides.length) {
    slideIndex = 1
  } 
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// popup
let trigger = document.getElementById("js-video-link"); 
let closeBtn = document.getElementById("js-popup-close"); 
let close = document.getElementById("js-overlay"); 

trigger.addEventListener('click', function(){
  document.getElementById("js-popup").style.display="block";
  document.getElementById("js-overlay").style.display="block";

}); 
close.addEventListener('click', function(){
  document.getElementById("js-popup").style.display="none";
  document.getElementById("js-overlay").style.display="none";
});
closeBtn.addEventListener('click', function(){
  document.getElementById("js-popup").style.display="none";
  document.getElementById("js-overlay").style.display="none";
  
});


// navigation fixed after scroll
window.addEventListener('scroll', function(){
  let scrollTop = window.scrollY;
  const header = document.querySelector('.js-site-top');
  
  if(scrollTop > 300) {
    header.classList.add('is-scrolled');
  } else { 
    header.classList.remove('is-scrolled');
  }

});

// mobile navigation fixed after scroll
window.addEventListener('scroll', function(){
  
  let scrollTop = window.scrollY;
  const headerMobile = document.querySelector('.js-site-top--mobile');
  const logo = document.querySelector('.site-top-mobile__logo-hld');
  
  if(scrollTop > 200) {
    headerMobile.classList.add('is-scrolled');
  } else { 
    headerMobile.classList.remove('is-scrolled');
  }
});

// show mobile nav on hamburger click
function mobileNavToggle(){
  const headerMobile = document.querySelector('.js-site-top--mobile');
  const toggle = document.getElementById('toggle')
  const logo = document.querySelector('.site-top-mobile__logo-hld');
  const hamburger = document.querySelector('.hamburger-icon');

  if(toggle.checked){
    headerMobile.style.backgroundColor = '#001927';  // styles by JS
    headerMobile.style.position = 'fixed'; 
    logo.classList.add('block'); // class toggle by JS
    hamburger.classList.add('open');
  } else {
    headerMobile.style.backgroundColor = 'transparent';
    logo.classList.remove('block');
    hamburger.classList.remove('open');
  }
}


// Initialize map
function initMap() {
  var adress = {lat: 16.9096894, lng: 52.4030534};
  var map = new google.maps.Map(
  document.getElementById('map'), {
    zoom: 18.75,
    center: adress,
    disableDefaultUI: true // defoult controls is hidden
  });
  var marker = new google.maps.Marker({
    position: adress,
    map: map,
    title: 'Pin',
    icon: {
      url: "img/pin.png" // custom marker
    }
  });
}
 
const form = {
  firstname: document.getElementById('form-firstName'),
  secondname: document.getElementById('form-secondName'),
  email: document.getElementById('form-email'),
  msg: document.getElementById('form-msg'),
  btn: document.getElementById('btn-submit')
};

// form
// form.btn.addEventListener('click', () => { 
//   const request = new XMLHttpRequest();

//   request.onload = () => {
//     console.log(request.responseText);
//   }

//   const requestData = `username=${form.firstname.value}+${form.firstname.value}&email=${form.email.value}`;

//   request.open('post','test.php');
//   request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//   request.send(requestData);

// });

