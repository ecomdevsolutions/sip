import $ from "jquery";
import "slick-carousel";

function slider() {
  const $slider = $("[data-index-header]");
  if ($slider.length > 0) {
    $slider.slick({
      swipeToSlide: true,
      arrows: false,
      dots: true,
      slidesToShow: 1,
    });
  }
}

$(document).ready(slider);
