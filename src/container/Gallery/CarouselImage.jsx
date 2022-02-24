import Carousel from "react-bootstrap/Carousel";
import { images } from "../../constants";


const CarouselImage = () => {
  return (
    <Carousel>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={images.gallery01}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={images.gallery02}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={images.gallery03}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="d-block w-100"
          src={images.gallery02}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselImage;
