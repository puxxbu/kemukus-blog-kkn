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
      {/* <MotionSection>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Kami KKN 84 UAJY Mempersembahkan
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Padukuhan Kemukus terletak di Desa Tanjungharjo,
              Kecamatan Nanggulan, Kabupaten Kulon Progo, Daerah
              Istimewa Yogyakarta. Padukuhan Kemukus dapat diakses
              melalui jalan-jalan desa yang menghubungkan antar
              kampung atau pedusunan
            </p>
          </div>
          <div className="lg:hidden">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1192049933080068096/fotobersama-kkn20-2.jpeg?ex=65a7aa03&is=65953503&hm=e683418240fbca78506daabbf348532e59ce1a89e7a7a1754f11e5675dc4a54d&"
              alt="mockup"
            />
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:justify-end">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1192049933080068096/fotobersama-kkn20-2.jpeg?ex=65a7aa03&is=65953503&hm=e683418240fbca78506daabbf348532e59ce1a89e7a7a1754f11e5675dc4a54d&"
              alt="mockup"
            />
          </div>
        </div>
      </MotionSection> */}
      <MotionSection>
        <div class="mx-auto grid max-w-screen-sm px-4 py-8 md:max-w-screen-xl lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Kami KKN 84 UAJY Mempersembahkan
            </h1>
            <p class="mb-6 max-w-2xl text-base font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Padukuhan Kemukus terletak di Desa Tanjungharjo,
              Kecamatan Nanggulan, Kabupaten Kulon Progo, Daerah
              Istimewa Yogyakarta. Padukuhan Kemukus dapat diakses
              melalui jalan-jalan desa yang menghubungkan antar
              kampung atau pedusunan
            </p>
          </div>
          <div className="lg:hidden">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1192049933080068096/fotobersama-kkn20-2.jpeg?ex=65a7aa03&is=65953503&hm=e683418240fbca78506daabbf348532e59ce1a89e7a7a1754f11e5675dc4a54d&"
              alt="mockup"
            />
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:justify-end">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1192049933080068096/fotobersama-kkn20-2.jpeg?ex=65a7aa03&is=65953503&hm=e683418240fbca78506daabbf348532e59ce1a89e7a7a1754f11e5675dc4a54d&"
              alt="mockup"
            />
          </div>
        </div>
      </MotionSection>
      {/* <MotionSection>
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Kami KKN 84 UAJY Mempersembahkan
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Padukuhan Kemukus terletak di Desa Tanjungharjo,
              Kecamatan Nanggulan, Kabupaten Kulon Progo, Daerah
              Istimewa Yogyakarta. Padukuhan Kemukus dapat diakses
              melalui jalan-jalan desa yang menghubungkan antar
              kampung atau pedusunan
            </p>
          </div>
          <div className="lg:hidden">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1192049933080068096/fotobersama-kkn20-2.jpeg?ex=65a7aa03&is=65953503&hm=e683418240fbca78506daabbf348532e59ce1a89e7a7a1754f11e5675dc4a54d&"
              alt="mockup"
            />
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:justify-end">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1192049933080068096/fotobersama-kkn20-2.jpeg?ex=65a7aa03&is=65953503&hm=e683418240fbca78506daabbf348532e59ce1a89e7a7a1754f11e5675dc4a54d&"
              alt="mockup"
            />
          </div>
        </div>
      </MotionSection> */}
      <div className="text-center">
        <p className="text-lg">
          Website ini dipersembahkan oleh Mahasiswa KKN 84 UAJY dan
          juga Karang Taruna Kemukus
        </p>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid-cols-5 lg:gap-8 lg:py-16 xl:gap-0">
        <InfiniteLoop />
      </div>

      {/* <div className="grid grid-cols-3 gap-5 mt-6 mb-16 md:mb-32 md:mt-16 md:gap-16">
        {authors.slice(0, 3).map(author => {
          const imageProps = urlForImage(author?.image) || null;
          return (
            <div
              key={author._id}
              className="relative overflow-hidden rounded-md aspect-square bg-slate-50 odd:translate-y-10 odd:md:translate-y-16">
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
      </div> */}

      <MotionSection>
        <div class="mx-auto grid max-w-screen-sm px-4 py-8 md:max-w-screen-xl lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-3xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Karang Taruna Kemukus Mempersembahkan
            </h1>
            <p class="mb-6 max-w-2xl text-base font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
              Padukuhan Kemukus terletak di Desa Tanjungharjo,
              Kecamatan Nanggulan, Kabupaten Kulon Progo, Daerah
              Istimewa Yogyakarta. Padukuhan Kemukus dapat diakses
              melalui jalan-jalan desa yang menghubungkan antar
              kampung atau pedusunan
            </p>
          </div>
          <div className="lg:hidden">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1186260349654155364/413753fe8fee2a4af980c5be21dbecb4.jpeg?ex=65929a0b&is=6580250b&hm=f0ed1307c02fbe50165ea880f09f243e348bbbea46ee0a4a1a7269160392d3f9&"
              alt="mockup"
            />
          </div>
          <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:justify-end">
            <img
              src="https://cdn.discordapp.com/attachments/170900821200994304/1186260349654155364/413753fe8fee2a4af980c5be21dbecb4.jpeg?ex=65929a0b&is=6580250b&hm=f0ed1307c02fbe50165ea880f09f243e348bbbea46ee0a4a1a7269160392d3f9&"
              alt="mockup"
            />
          </div>
        </div>
      </MotionSection>
    </Container>
  );
}
