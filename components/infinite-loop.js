import { Carousel } from "flowbite-react";
import Image from "next/image";
import ProfileCard from "./profile-card";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import styles from "@/styles";

export default function InfiniteLoop(props) {
  const profiles = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Michael Johnson" },
    { id: 4, name: "Sarah Williams" },
    { id: 5, name: "David Brown" }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      {/* <TypingText title="| The Worlds" textStyles="text-center" />
    <TitleText
      title={
        <>
          Chose the world you want <br className="hidden md:block" /> to
          explore
        </>
      }
      textStyles="text-center"
    /> */}
      <div className="grid grid-cols-3 gap-5">
        {profiles.map((item, i) => (
          <ProfileCard key={i} name={item.name} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
