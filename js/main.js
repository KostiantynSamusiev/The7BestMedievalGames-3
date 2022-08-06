let topGame = document.querySelectorAll('.game-section'),
    aboutGame = document.querySelector('.about-game'),
    burgerMenu = document.querySelector('.main-app'),
    headerLinks  = document.querySelector('.header-links'),
    shopLink  = document.querySelector('.shop-link'),
    arrow  = document.querySelector('.arrow');

//Burger menu
burgerMenu.onclick = function () {
  headerLinks.classList.toggle('is-active');
  shopLink.classList.toggle('shop-link-non-active');
};

arrow.onclick = function () {
  window.scrollTo({
  top: 0,
  behavior: "smooth"});
};

 //  Carousel slider
$('.gallery').slick({
  infinite: false,
  slidesToShow: 1,
  arrows: true,
  dots: true,
  centerMode: true,
  centerPadding: '5px',
  slidesToScroll: 1
    });

$(document).on('click', '.main-btn', function(e){
 $(this).toggleClass('active');
 $('.btn-cont').toggleClass('active');
});
  
  
Fancybox.bind('[data-fancybox="gallery"]', {
      Toolbar: {
        display: [
          { id: "prev", position: "center" },
          { id: "counter", position: "center" },
          { id: "next", position: "center" },    
          "close",
        ],
      },
    });

//Dropdown
      for (let i=0; i<=topGame.length; i++) {
        
        topGame[i].addEventListener('click', function() {
          
          if (topGame[i].id == "game1") {
            currentGame = document.getElementById('a');
            currentGame.classList.toggle('is-active');
            topGame[i].classList.toggle('game-section-active');
            $('.gallery').slick('refresh');
            
          } else if (topGame[i].id == "game2") {
            currentGame = document.getElementById('b');
            currentGame.classList.toggle('is-active');
            topGame[i].classList.toggle('game-section-active');
            $('.gallery').slick('refresh');
          } else if (topGame[i].id == "game3") {
            currentGame = document.getElementById('c');
            currentGame.classList.toggle('is-active');
            topGame[i].classList.toggle('game-section-active');
            $('.gallery').slick('refresh');
          } else if (topGame[i].id == "game4") {
            currentGame = document.getElementById('d');
            currentGame.classList.toggle('is-active');
            topGame[i].classList.toggle('game-section-active');
            $('.gallery').slick('refresh');
          } 
        });
        
      }
      

