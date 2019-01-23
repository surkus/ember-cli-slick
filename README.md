# @surkus/ember-cli-slick

`@surkus/ember-cli-slick` is a component that wraps the Slick Slider Jquery plugin functionality for use with Ember CLI.

This was originally written by [laantorchaweb](https://github.com/laantorchaweb/ember-cli-slick) and has since been upgraded to work with Ember CLI >= 3.4.

The versioning has changed to correspond to the supported Slick Carousel version. Current version is 1.8.x.

Surkus is a huge proponent of Ember and as such will support maintaining these addons for as long as we use them. Giving confidence to the community that these will be properly updated and maintained over time.

### Installation

From inside your ember-cli project, run the following:

```bash
ember install @surkus/ember-cli-slick
```

Add css to your dot sass or scss file.

```sass
  @import @surkus/ember-cli-slick/slick
  @import @surkus/ember-cli-slick/slick-theme
```

### slick-slider Component

```hbs
{{#slick-slider autoplay=true arrows=false}}
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
{{/slick-slider}}
```

### Callbacks

```js
slickInit => init //Changed for the purpose of component
beforeChange
afterChange
breakpoint
edge
reInit
setPosition
swipe
destroy
lazyLoaded
lazyLoadError
```

```hbs
{{#slick-slider	afterChange=(action 'someAfterChange')}}
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
{{/slick-slider}}
```

### Init Event
A `slickInit` event may be bound from your template. This event is triggered after Ember's internal didInsertElement with a DOM reference to the newly created widget allowing direct manipulation of the DOM elements after creation.

```hbs
{{#slick-slider	slickInit=(action 'someInitAction')}}
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
{{/slick-slider}}
```

### The responsive configuration needs to be passed by a controller property

```hbs
{{#slick-slider	responsive=breakpoints}}
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
  <div class="box"> <img src="https://picsum.photos/200/300"> </div>
{{/slick-slider}}
```

```js
import Controller from '@ember/controller';

const breakpoint = [
  {
    'breakpoint': 1024,
    'settings': {
      'slidesToShow': 3,
      'slidesToScroll': 3,
      'infinite': true
    }
  },
  {
    'breakpoint': 600,
    'settings': {
      'slidesToShow': 2,
      'slidesToScroll': 2
    }
  },
  {
    'breakpoint': 480,
    'settings': {
      'slidesToShow': 1,
      'slidesToScroll': 1
    }
  }
]

export default Controller.extend({
  breakpoints
});
```

### Customization
This widget supports the full range of slick-slider configuration options. The full list with descriptions can be found at the [slick-slider homepage](http://kenwheeler.github.io/slick/).

* accessibility
* adaptiveHeight
* autoplay
* autoplaySpeed
* arrows
* asNavFor
* appendArrows
* appendDots
* prevArrow
* nextArrow
* centerMode
* centerPadding
* cssEase
* customPaging
* dots
* draggable
* fade
* focusOnSelect
* easing
* edgeFriction
* infinite
* initialSlide
* lazyLoad
* mobileFirst
* pauseOnHover
* pauseOnDotsHover
* respondTo
* responsive
* rows
* slide
* slidesPerRow
* slidesToShow
* slidesToScroll
* speed
* swipe
* swipeToSlide
* touchMove
* touchThreshold
* useCss
* variableWidth
* vertical
* verticalSwiping
* rtl


## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
