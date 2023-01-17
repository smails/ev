import $ from "jquery";
import "slick-carousel";

$(".viewed__list").slick({
  slidesToShow: 5,
  speed: 300,
  useTransform: true,
  responsive: [
    {
      breakpoint: 1023,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
  ]
});