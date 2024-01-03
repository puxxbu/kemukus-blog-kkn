import { Carousel } from "flowbite-react";
import Image from "next/image";
import ProfileCard from "./profile-card";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import styles from "@/styles";

export default function InfiniteLoop(props) {
  const profiles = [
    // { id: 1, name: "Ardhya Devanty C." },
    // { id: 2, name: "Benidiktus Valerino G." },
    // { id: 3, name: "Helena Widya H." },
    // { id: 4, name: "I Dewa Gde Trisna Adi Yadnya" },
    // { id: 5, name: "Imanuella Maria S." },
    // { id: 6, name: "Johan Anderson G." },
    // { id: 7, name: "Joya Fransiska K." },
    {
      id: 8,
      name: "Valerino Gozen",
      image_url:
        "https://cdn.discordapp.com/attachments/170900821200994304/1186571054643163136/IMG_20231001_1646501on1.jpg?ex=6593bb68&is=65814668&hm=7d36d1d573f8ce911a3337382416490e541a85c1d2ef69a703950c0f1223d80a&"
    },
    {
      id: 9,
      name: "Mas Yuda",
      image_url:
        "https://cdn.discordapp.com/attachments/170900821200994304/1192042625230983218/mas-yuda2.png?ex=65a7a334&is=65952e34&hm=4c8c76cd3503a84985d353a5157ab95493dbd505369cc5ccfbcacb52b92bf4e2&"
    }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {profiles.map((item, i) => (
          <ProfileCard
            key={i}
            name={item.name}
            index={i}
            image_url={item.image_url}
          />
        ))}
      </div>
    </motion.div>
  );
}
