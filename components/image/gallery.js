import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Gallery(props) {
  const { images } = props;

  return (
    <div className="h-[45rem] bg-black">
      <Carousel>
        {images.map((image, index) => (
          <img
            key={index}
            className="object-scale-down"
            src={image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
}
