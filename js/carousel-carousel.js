
var carouselCarousel = {

  arrowButtons: true, // set to false if no arrows on your carousel
  carouselID: '',

  init: function (id) {
    carouselCarousel.carouselID = id;
    carouselCarousel.activateCarousels();  
  },

  activateCarousels : function () {
    var radios = document.querySelectorAll('#' + carouselCarousel.carouselID +' input[type="radio"]'),
        i = 0,
        l = radios.length;
    if(l && carouselCarousel.arrowButtons) {
      if(l > 1) { // if you have more than one card, add back and forward buttons for sited users
        carouselCarousel.activateForwardAndBack();
      }
      for(i = 0; i < l; i++) {
        radios[i].addEventListener('change', function (e) {
          carouselCarousel.carouselChange(e.target.dataset.value);
        })
      }
    }
  },

  // Activate arrows if there is more than one item and arrows are included
  activateForwardAndBack: function () {
    console.log(arguments.length);
    var arrowButtons = document.querySelectorAll('#' + carouselCarousel.carouselID +' [data-move]'),
        l = arrowButtons.length;
    for (var i = 0; i < l; i++) {
      arrowButtons[i].removeAttribute('hidden');
      arrowButtons[i].addEventListener('click', function(e) {
        carouselCarousel.moveForwardOrBack(e);
      });
      arrowButtons[i].addEventListener('keyup', function(e) {
        if(e.keyCode == 13) {
          carouselCarousel.moveForwardOrBack(e);
        }
      });
    }
  },

  moveForwardOrBack: function (e) {
        var name = e.target.dataset.carousel,
            buttons = document.querySelectorAll('input[name=' + name + ']'),
            move = (e.target.dataset.move == 'forward') ? 1 : -1,
            selectedButton = +document.querySelector('input[name=' + name + ']:checked').dataset.value,
            newValue = (buttons.length + selectedButton + move) % buttons.length;
        buttons[newValue].checked = true;
        carouselCarousel.carouselChange(newValue);
  },

  carouselChange: function (value) {
    document.querySelector('.carousel-labels').setAttribute('class', 'carousel-labels left' + value);
  }
}