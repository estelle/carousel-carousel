# Carousel-Carousel

Script for creating simple, accessible carousels


## Features

`carousel-carousel.js`, along with a simple fieldset of radio buttons and associated labels enables you to create accessible carousels without frameworks and without a plethora of accessibility bugs or added ARIA maintenance.

The user can use the mouse or keyboard to tab through the carousel. Screen reader users hear an accessible list of options.


## Examples

A carousel of addresses. Selecting one submits the form along with the selected address option:

<http://estelle.github.io/carousel-carousel>

A carousel of carousels. Selecting one redirects the user to the flickr page for that image.

<http://estelle.github.io/carousel-carousel/horse.html>

## Quick Start

Include `carousel-carousel.js`.

```html
<script src="path/js/carousel-carousel.js"></script>`
```

Until I create the auto-initiation script, you also have to instantiate each carousel, where `carouselID` is the value of the id on the fieldset.

```html
<script>
window.onload = function () {
  carouselCarousel.init('carouselID');
};</script>`
```


Add either the css file `carousel.css` to your page, or incorporate the .scss component into your sass build. 


```html
<link rel="stylesheet" href="path/css/carousel.css"/>
```

Note you can change values:


```html
$theme: blue;
$carousel_width: 20em;
$arrowwidth: 1px;
```


## HTML

The first rule of ARIA is don't use ARIA. The 1st rule of ARIA use is if you can use a native HTML element or attribute with the semantics behavior already built in, do that instead. The point of Carousel-Carousel is to create accessible content, then turn it into a carousel for sighted users: progressive enhancement. 

Start off with semantic HTML. Here is the outline: 

```html
<form action="someAction">
<fieldset class="carousel" id="idForTheCarousel">
  <legend>Legend is read by screenreader</legend>
  <div>
    <a class="backward" data-move="backward" data-carousel="nameOfRadioButtons" hidden aria-hidden="true"></a>
    <ul class="carousel-labels left0">
      <li>
        <label for="firstRadioID">Carousel Slide #1
        </label>
      </li>
      <li>
        <label for="secondRadioID">Carousel Slide #2
        </label>
      </li>
    </ul>
    <a class="forward" data-move="forward" data-carousel="nameOfRadioButtons" hidden aria-hidden="true"></a>
    </div>
    <ul class="carousel-radios">
      <li>
        <input type="radio" name="nameOfRadioButtons" data-value="0" value="someValue" id="firstRadioID" checked><span></span>
      </li>
      <li>
        <input type="radio" name="nameOfRadioButtons" value="some other value" data-value="1" id="secondRadioID"><span></span>
      </li>
    </ul>
    </fieldset>
   <input type="submit" value="Put Submit Button Text Here">
</form>
```

Include more labels and their associated radio button for each carousel slide.

## Accessibility

There are accessibility features baked into the examples that you must maintain to maintain accessibility.

* Always include a fieldset
* Always include a legend. The content of the legend should indicate the purpose of the list of options of the carousel-carousel. This is read by the screen reader.
* Always include label content that describes the content of the slide. Do not include form controls in the label. Avoid using links.
* Always include a label for each radio button control, and associate the form control explicitly with the `for` and `id` attributes.
* The forward and backward buttons are invisible to the screen reader. While not required, they do improve usability. They are initially hidden, being displayed only if JavaScript is available and if there are more than one option. 


## Browsers Tested

* Safari
* Chrome
* Firefox
* Opera

## Customization

### Initalization

### Options

#### onError


## Documentation

Handles these test cases:

* Arrow keys can be used

## Exceptions


## ReactJS version


## Contributors

[Estelle Weyl](http://twitter.com/estellevw). 

## License

This code is available under the [MIT license](LICENSE)

## Thanks


