"use client";

import Container from "@/components/container";
import InfiniteLoop from "@/components/infinite-loop";
import { motion } from "framer-motion";

export default function Home({ authors, settings }) {
  return (
    <Container>
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Tentang Padukuhan Kemukus
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Di Padukuhan Kemukus, terdapat air terjun yang dikenal
              dengan nama Air Terjun Kemukus. Air terjun ini terletak
              di tengah hutan dan dikelilingi oleh pemandangan yang
              hijau dan segar. Pengunjung dapat menikmati keindahan
              air terjun yang memiliki ketinggian sekitar 35 meter dan
              airnya yang jernih.
            </p>
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1186260349654155364/413753fe8fee2a4af980c5be21dbecb4.jpeg?ex=65929a0b&is=6580250b&hm=f0ed1307c02fbe50165ea880f09f243e348bbbea46ee0a4a1a7269160392d3f9&"
              alt="mockup"
            />
          </div>
        </div>
      </motion.section>

      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid-cols-6 lg:gap-8 lg:py-16 xl:gap-0">
        <InfiniteLoop />
      </div>

      <motion.section
        className="bg-white dark:bg-gray-900"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}>
        <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0"></div>
      </motion.section>
    </Container>
  );
}
