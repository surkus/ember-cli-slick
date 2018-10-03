import Controller from '@ember/controller';
import { Logger } from '@ember';

const breakpoints = [
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }
];

export default Controller.extend({
  breakpoints,
  actions: {
    afterChange(slick, currentSlide) {
      Logger.log("afterChange", slick, currentSlide);
    }
  }
});
