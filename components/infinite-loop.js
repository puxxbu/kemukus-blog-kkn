import { Carousel } from "flowbite-react";
import Image from "next/image";
import ProfileCard from "./profile-card";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import styles from "@/styles";

export default function InfiniteLoop(props) {
  const profiles = [
    { id: 1, name: "Ardhya Devanty C." },
    { id: 2, name: "Benidiktus Valerino G." },
    { id: 3, name: "Helena Widya H." },
    { id: 4, name: "I Dewa Gde Trisna Adi Yadnya" },
    { id: 5, name: "Imanuella Maria S." },
    { id: 6, name: "Johan Anderson G." },
    { id: 7, name: "Joya Fransiska K." },
    { id: 8, name: "Kunthi Mawar P." },
    { id: 9, name: "Natasya Monica" },
    { id: 10, name: "Sotardodo Nababan" }
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {profiles.map((item, i) => (
          <ProfileCard key={i} name={item.name} index={i} />
        ))}
      </div>
    </motion.div>
  );
}
