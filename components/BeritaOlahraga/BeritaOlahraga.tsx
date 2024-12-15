"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Config from "@/app/config/config";

const BeritaOlahraga = ({ blog }) => {
  const {
    judul_berita_olahraga,
    tanggal_berita_olahraga,
    gambar_berita_olahraga,
    id,
  } = blog;

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        <Link
          href={`/berita-olahraga`} // Gunakan slug di URL
          className="relative block aspect-[368/239]"
        >
          <Image
            src={`${Config.ipPUBLIC}/images/${gambar_berita_olahraga}`}
            alt={judul_berita_olahraga}
            fill
          />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/berita-olahraga/${id}`}>
              {" "}
              {/* Ganti dengan slug */}
              {`${judul_berita_olahraga ? judul_berita_olahraga.slice(0, 40) : "Judul tidak tersedia"}...`}
            </Link>
          </h3>
          <p className="text-sm text-gray-500">{tanggal_berita_olahraga}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BeritaOlahraga;
