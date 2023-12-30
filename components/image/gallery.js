import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Gallery(props) {
  const { images } = props;

  return (
    <div className="sm:h-60vh h-[30rem] h-[30rem] bg-black sm:h-[20rem]">
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
