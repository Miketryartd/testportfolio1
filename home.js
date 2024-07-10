

const images = ["17.jpg", "d32.png", "9.jpg", "sukuna.png", "klee.png", "13.jpg", "16.jpg", "wq3.png"];
let currentIndex = 0;

const showcaseImage = document.getElementById('showcaseImage');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

function updateImage(index){
    showcaseImage.src = images[index];
};
prevBtn.addEventListener('click', () =>{
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage(currentIndex);
});

nextBtn.addEventListener('click', () =>{
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateImage(currentIndex);
});

const header = document.getElementById('header');
const sticky = header.offsetTop;
function stickyScroll(){
  if (window.pageYOffset > sticky){
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};


const mobileMenu = document.getElementById('mobileDesignMenu');
 mobileMenu.addEventListener('click', () =>{
    const mobileMenuPref = document.getElementById('mobileMenu');
    if (mobileMenuPref.style.display === 'block'){
        mobileMenuPref.style.display = 'none';
    } else {
        mobileMenuPref.style.display = 'block';
    }
 })


document.addEventListener('DOMContentLoaded', (event) =>{
   window.onscroll = function(){
    stickyScroll(); 
   }    
});