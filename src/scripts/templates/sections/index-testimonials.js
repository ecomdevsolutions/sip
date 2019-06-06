import $ from "jquery";
import "slick-carousel";

function slider() {
  const $slider = $("[data-testimonials]");
  if ($slider.length > 0) {
    $slider.slick({
      swipeToSlide: true,
      arrows: false,
      dots: true,
      slidesToShow: 3,
    });
  }
}

$(document).ready(slider);
