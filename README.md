# Carousel-Carousel

Script for creating simple, accessible carousels


## Features

`carousel-carousel.js`, along with a simple fieldset of radio buttons and associated labels enables you to create accessible carousels without frameworks and without a plethora of accessibility bugs or added ARIA maintenance.

The user can use the mouse or keyboard to tab through the carousel. Screen reader users hear an accessible list of options. Keyboard users can navigate thru the faux radio buttons. Mouse users can click on any of the faux radio buttons or the forward and back arrows. The arrows are NOT focusable via tabbing as they are redundant, and the fourth rule of ARIA is 'Do not use `role="presentation"` or `aria-hidden="true"` on a visible focusable element.




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


Add a css file of your own creation similar `carousel.css` to your page. Included in the repository are several Sass modules making up the `carousel.css`. I've included the CSS just like so: 


```html
<link rel="stylesheet" href="path/css/carousel.css"/>
```

You should incorporate the .scss component into your sass build. Note you will want to change the following values to match your design and the width of the carousel:


```html
$themeColor: blue;
$arrowWidth: 1px;
$arrowSize: 20px;
$carouselBorder: 1px solid #bbbbbb;
$carouselWidth: 20em;
$carouselRadius: 5px;
$radioSpacing: 20px;
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

Needs Testing:

* Edge

## Browsers / Screen Readers Tested

* Safari with Voice Over
* Firefox with Voice Over
* Chrome with Chrome Vox

## Customization

See Options

### Initalization

To do: 

* self initialize

### Options

You must include the following variables and values in your SCSS files:

``` HTML
$themeColor: <color value for theme>;
$arrowWidth: <the border-width of arrow''s two lines>;
$arrowSize: <the length of those two lines>;
$carouselWidth: <width of carousel in em units>;
$carouselBorder: <none or border shorthand declaration>;
$carouselRadius: <corners of the carousel>;
$radioSpacing: <width of space between radio buttons>;
```

If you're not using a preprocessor, you can grab `carousel.css` and make changes to your CSS as necessary.

## Documentation

Handles these test cases:

* Keyboard users: can tab and use arrow keys
* Mouse users
* Screen Readers

To do: 

* handle touch

## Exceptions


## ReactJS version

To Do

## Contributors

[Estelle Weyl](http://twitter.com/estellevw). 

## License

This code is available under the [MIT license](LICENSE)

## Thanks


