"use client";

import Container from "@/components/container";
import Gallery from "@/components/image/gallery";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "@/styles";
import {
  slideIn,
  staggerContainer,
  textVariant
} from "../../utils/motion";

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
            <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Payments tool for software companies
            </h1>
            <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              From checkout to global sales tax compliance, companies
              around the world use Flowbite to simplify their payment
              stack.
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
    </Container>
  );
}
