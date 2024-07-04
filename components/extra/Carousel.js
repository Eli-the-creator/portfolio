import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

export default function CarouselComponent({ images }) {
  return (
    <Carousel
      centerMode={true}
      swipeable={true}
      draggable={false}
      infinite={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      keyBoardControl={true}
    >
      {images.map((el, idx) => (
        <img
          className="max-w-[600px] max-h-[400px] p-20 object-cover"
          src={el}
          alt="img"
          key={idx}
        />
      ))}
    </Carousel>
  );
}
