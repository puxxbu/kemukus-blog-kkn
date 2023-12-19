import { Carousel } from "flowbite-react";
import Image from "next/image";

export default function Gallery(props) {
  return (
    <div className="h-96 bg-black">
      <Carousel>
        <img
          className="object-fill"
          src="https://cdn.discordapp.com/attachments/170900821200994304/1186260349654155364/413753fe8fee2a4af980c5be21dbecb4.jpeg?ex=65929a0b&is=6580250b&hm=f0ed1307c02fbe50165ea880f09f243e348bbbea46ee0a4a1a7269160392d3f9&"
          alt="..."
        />
        <img
          className="object-contain"
          src="https://cdn.discordapp.com/attachments/170900821200994304/1186260349654155364/413753fe8fee2a4af980c5be21dbecb4.jpeg?ex=65929a0b&is=6580250b&hm=f0ed1307c02fbe50165ea880f09f243e348bbbea46ee0a4a1a7269160392d3f9&"
          alt="..."
        />
      </Carousel>
    </div>
  );
}
