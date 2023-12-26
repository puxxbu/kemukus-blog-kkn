"use client";

import Container from "@/components/container";
import MotionSection from "@/components/easeout-animation";
import Gallery from "@/components/image/gallery";
import InfiniteLoop from "@/components/infinite-loop";
import { urlForImage } from "@/lib/sanity/image";
import Image from "next/image";
import Link from "next/link";

export default function About({ authors, settings }) {
  return (
    <Container>
      <h1 className="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
        Tentang Website Kami
      </h1>
      <section className="bg-white dark:bg-gray-900 ">
        <MotionSection>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Payments tool for software companies
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-500 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                From checkout to global sales tax compliance,
                companies around the world use Flowbite to simplify
                their payment stack.
              </p>
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1186260349654155364/413753fe8fee2a4af980c5be21dbecb4.jpeg?ex=65929a0b&is=6580250b&hm=f0ed1307c02fbe50165ea880f09f243e348bbbea46ee0a4a1a7269160392d3f9&"
                alt="mockup"
              />
            </div>
          </div>
        </MotionSection>
      </section>
      <div className="text-center">
        <p className="text-lg">
          Kami Dari Kelompok 20 KKN 84 Mempersembahkan
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid-cols-5 lg:gap-8 lg:py-16 xl:gap-0">
        <InfiniteLoop />
      </div>

      <div className="mb-16 mt-6 grid grid-cols-3 gap-5 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative aspect-square overflow-hidden rounded-md bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
              <Link href={`/author/${author?.slug}`}>
                {imageProps && (
                  <Image
                    src={imageProps?.src}
                    alt={author?.name || " "}
                    fill
                    sizes="(max-width: 320px) 100vw, 320px"
                    className="object-cover"
                  />
                )}
              </Link>
            </div>
          );
        })}
      </div>
      <div className="prose mx-auto mt-14 bg-slate-400 text-center dark:prose-invert">
        <p>
          We provide real-time connectivity to enable software
          providers and financial institutions to build integrated
          products for their small business customers.
        </p>
        <p>
          Our API infrastructure is leveraged by clients ranging from
          lenders to corporate card providers and business forecasting
          tools, with use cases including automatic reconciliation,
          business dashboarding, and loan decisioning.
        </p>
        <p>
          <Link href="/contact">Get in touch</Link>
        </p>
      </div>
    </Container>
  );
}
