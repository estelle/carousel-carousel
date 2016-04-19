var carousel = {
  radioName : '',
  width: null,

  init :  function (id, width) {
    carousel.setWidth(id, width);
    carousel.activate(id);  
  },

  setWidth : function (id, width) {
    carousel.width = width || carousel.width || document.querySelector(id + ' div ul').clientWidth;
    console.log(carousel.width);
  },

  activate : function (id) {
    var radios = document.querySelectorAll(id + ' input[type=radio]'),
        i = 0,
        l = radios.length;
    if(l) {
      carousel.radioName = radios[0].name;
      if(l > 1) { // if you have more than one card, add back and forward buttons for sited users
        carousel.activateForwardAndBack(id);
      }
      for(i = 0; i < l; i++) {
        radios[i].addEventListener('change', function (e) {
          carousel.change(e.target.name, e.target.value);
        })
      }
    }
  },

  activateForwardAndBack: function (id) {
    var arrowButtons = document.querySelectorAll(id + ' [data-move]'),
      i = 0, 
      l = arrowButtons.length;
    for (; i < l; i++) {
      arrowButtons[i].removeAttribute('hidden');
      arrowButtons[i].addEventListener('click', function(e) {
        var name = e.target.dataset.carousel;
        var buttons = document.querySelectorAll('input[name=' + name + ']'),
            move = (e.target.dataset.move == 'forward') ? 1 : -1,
            selectedButton = +document.querySelector('input[name=' + name + ']:checked').value,
            newValue = (buttons.length + selectedButton + move) % buttons.length;
        buttons[newValue].checked = true;
        carousel.change(name, newValue);
      });
    }

  },

  change : function (name, value) {
    name = 'carousel-content';
    var ul = document.querySelector('.' + name);
    ul.setAttribute('class', name + ' left' + value);
  }
}
window.onload = carousel.init('#address');