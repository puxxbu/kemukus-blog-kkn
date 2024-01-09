"use client";

import Container from "@/components/container";
import Gallery from "@/components/image/gallery";
import InfiniteLoop from "@/components/infinite-loop";
import { motion } from "framer-motion";

const bounceVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};
const easeOutVariant = {
  offscreen: {
    opacity: 0,
    x: -100
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "easeOut",

      duration: 0.8
    }
  }
};

const images = [
  "https://cdn.discordapp.com/attachments/170900821200994304/1192351628901236776/proker-senam-1-cropped.jpeg?ex=65a8c2fd&is=65964dfd&hm=3db67c48c2a335ae64d51a48dc744810b988356674d899603b6f7b6047dad454&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1192351628200788038/proker-kelurahan-1.jpeg?ex=65a8c2fc&is=65964dfc&hm=77d2d070cbc15765d99c526d59b2daa1e15f0539a67c118a73c1944181806c24&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1192351628548911156/proker-kelurahan-8.jpeg?ex=65a8c2fd&is=65964dfd&hm=9b4a4719c58e397922651fbb465b24da99b4ebbceb7421ed178389814506ec05&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1192351627517112391/gitar-1.jpeg?ex=65a8c2fc&is=65964dfc&hm=73616d63a09c6eaacda11c0b61f65f54f8742aa78b5a5e36082d812e16e14af5&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1192351627890401291/gitar-2.jpeg?ex=65a8c2fc&is=65964dfc&hm=218c586a84729697ffdcaad3b05fafa556579e35f333ea8eaa09277543de5d23&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1194258956365860945/sikatgigi-1.jpeg?ex=65afb353&is=659d3e53&hm=ec320f81176dfa4cd7a41e34fd208e2d0d8a786558c8e816cb3f61edefd3afc7&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1194258958664339486/sikatgigi-2.jpeg?ex=65afb354&is=659d3e54&hm=73231dae92cd77185256ef9c0a487b53a8c3328cbd9d8134a3928969433c8749&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1194258958257500160/sikatgigi-3.jpeg?ex=65afb353&is=659d3e53&hm=11797e71ba6ea699d89d33f1b88c99321e60cdb2b0cdc10bd0ca38b57d90955c&",
  "https://cdn.discordapp.com/attachments/170900821200994304/1194258957515116646/sikatgigi-4.jpeg?ex=65afb353&is=659d3e53&hm=6e1657ae229557f44a0eaaa479a9c3258debc2af37cb291c1cfcdd68034034f7&"
];

export default function Home({ authors, settings }) {
  return (
    <Container>
      {/* Gambar Kanan */}
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div variants={easeOutVariant}>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Tentang Padukuhan Kemukus
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                Padukuhan Kemukus terletak di Desa Tanjungharjo,
                Kecamatan Nanggulan, Kabupaten Kulon Progo, Daerah
                Istimewa Yogyakarta. Padukuhan Kemukus dapat diakses
                melalui jalan-jalan desa yang menghubungkan antar
                kampung atau pedusunan
              </p>
            </div>
            <div className="lg:hidden">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1191651673282723892/proker-senam-1-cropped.jpeg?ex=65a6371a&is=6593c21a&hm=1c5346734a4b2de849ec4a8a684aea5529de43a32f676d85d194b138cd4d4d26&"
                alt="mockup"
              />
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:justify-end">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1191651673282723892/proker-senam-1-cropped.jpeg?ex=65a6371a&is=6593c21a&hm=1c5346734a4b2de849ec4a8a684aea5529de43a32f676d85d194b138cd4d4d26&"
                alt="mockup"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Gambar Kiri */}
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div variants={easeOutVariant}>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1191648100629106779/random-sawah-3.jpeg?ex=65a633c6&is=6593bec6&hm=9f4f1f49ebcf604a41d78c63f66d418f4ee0c15c964704852bc44dfb25ecf6e6&"
                alt="mockup"
              />
            </div>
            <div className="ml-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Sumber Daya Alam Kemukus 🌿
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                Di Padukuhan Kemukus, terdapat air terjun yang dikenal
                dengan nama Air Terjun Kemukus. Air terjun ini
                terletak di tengah hutan dan dikelilingi oleh
                pemandangan yang hijau dan segar. Pengunjung dapat
                menikmati keindahan air terjun yang memiliki
                ketinggian sekitar 35 meter dan airnya yang jernih.
              </p>
            </div>
            <div className="lg:hidden">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1191648100629106779/random-sawah-3.jpeg?ex=65a633c6&is=6593bec6&hm=9f4f1f49ebcf604a41d78c63f66d418f4ee0c15c964704852bc44dfb25ecf6e6&"
                alt="mockup"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Carousel */}
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div variants={easeOutVariant}>
          <div className="mx-auto max-w-screen-xl px-4 py-8 lg:grid-cols-6 lg:gap-8 lg:py-16 xl:gap-0">
            <h1 className="text-brand-primary mb-3 mt-2 text-center text-4xl font-semibold tracking-tight lg:text-6xl lg:leading-snug dark:text-white">
              Galeri Kegiatan 🖼️
            </h1>
            <Gallery images={images} />
          </div>
        </motion.div>
      </motion.section>

      {/* Gambar Kiri */}
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div variants={easeOutVariant}>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1194242296099647508/sdnkalimanggis-1.jpeg?ex=65afa3cf&is=659d2ecf&hm=5015dd48e25b188866d4a63917980a9bdfdd807a5a7b5a2e6d024ca479dd8e59&"
                alt="mockup"
              />
            </div>
            <div className="ml-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Fasilitas Pendidikan Kemukus 🏫
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                Pada tahun ajaran 2023/2024, SD Negeri Kalimanggis
                memiliki program ekstrakurikuler yang meliputi
                pramuka, olahraga, seni, dan budaya. Sekolah ini juga
                aktif mengikuti berbagai lomba dan kegiatan di tingkat
                kabupaten dan provinsi.SD Negeri Kalimanggis memiliki
                visi untuk menjadi sekolah yang unggul dalam prestasi
                akademik dan non-akademik, serta berakhlak mulia.
                Sekolah ini berkomitmen untuk memberikan pendidikan
                yang berkualitas kepada seluruh siswanya.
              </p>
            </div>
            <div className="lg:hidden">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1194242296099647508/sdnkalimanggis-1.jpeg?ex=65afa3cf&is=659d2ecf&hm=5015dd48e25b188866d4a63917980a9bdfdd807a5a7b5a2e6d024ca479dd8e59&"
                alt="mockup"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Gambar Kanan */}
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div variants={easeOutVariant}>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                Fasilitas Padukuhan Kemukus 🏊
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                Padukuhan Kemukus juga memiliki beberapa hiburan dan
                fasilitas yang dapat dipakai, seperti contohnya adalah
                Kolam Renang Arga Tirta yang dapat diakses dengan
                membeli tiket seharga Rp.7000,00 (per Jan 2024) saja
                per orangnya
              </p>
            </div>
            <div className="lg:hidden">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1192649993958465656/kolamrenang-1.jpeg?ex=65a9d8dc&is=659763dc&hm=f7b5f12d38b068e064299bdcd96bb5bd6f740c0c1b2435f2074edaf800afc1ee&"
                alt="mockup"
              />
            </div>
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex lg:justify-end">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1192649993958465656/kolamrenang-1.jpeg?ex=65a9d8dc&is=659763dc&hm=f7b5f12d38b068e064299bdcd96bb5bd6f740c0c1b2435f2074edaf800afc1ee&"
                alt="mockup"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* Gambar Kiri */}
      <motion.section
        className="bg-white dark:bg-gray-900"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}>
        <motion.div variants={easeOutVariant}>
          <div className="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
            <div className="hidden lg:col-span-5 lg:mt-0 lg:flex">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1194242295751512175/satriamart-1.jpeg?ex=65afa3cf&is=659d2ecf&hm=b5b4a24744499747012bb6d8c2a2b41e5f81e053cf4cf93daad315b32ad51e10&"
                alt="mockup"
              />
            </div>
            <div className="ml-auto place-self-center lg:col-span-7">
              <h1 className="mb-4 max-w-2xl text-5xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
                UMKM Padukuhan Kemukus 🛒
              </h1>
              <p className="mb-6 max-w-2xl font-light text-gray-900 md:text-lg lg:mb-8 lg:text-xl dark:text-gray-400">
                Di Padukuhan Kemukus, terdapat beberapa UMKM yang
                berperan sebagai sumber ekonomi bagi masyarakat
                setempat. UMKM yang ada meliputi usaha pembuatan peti
                mati, penjual makanan, toko kelontong, dan berbagai
                jenis usaha lainnya. Keberadaan UMKM-UMKM ini
                memberikan kontribusi yang signifikan dalam
                perekonomian wilayah, memperluas lapangan kerja, dan
                meningkatkan pendapatan masyarakat sekitar.
              </p>
            </div>
            <div className="lg:hidden">
              <img
                src="https://cdn.discordapp.com/attachments/170900821200994304/1194242295751512175/satriamart-1.jpeg?ex=65afa3cf&is=659d2ecf&hm=b5b4a24744499747012bb6d8c2a2b41e5f81e053cf4cf93daad315b32ad51e10&"
                alt="mockup"
              />
            </div>
          </div>
        </motion.div>
      </motion.section>

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
