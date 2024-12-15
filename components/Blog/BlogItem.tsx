"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Config from "@/app/config/config";

// Fungsi untuk membuat slug dari judul berita
const createSlug = (title) => {
  return title
    .toLowerCase() // Mengubah huruf menjadi kecil
    .replace(/[^a-z0-9\s-]/g, "") // Menghapus karakter tidak valid
    .trim() // Menghapus spasi di awal dan akhir
    .replace(/\s+/g, "-") // Mengganti spasi dengan tanda hubung
    .replace(/-+/g, "-"); // Mengganti tanda hubung ganda menjadi satu
};

const BlogItem = ({ blog }) => {
  const { judul_berita, tanggal_berita, gambar, id } = blog;

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
          href={`/berita-pemuda`} // Gunakan slug di URL
          className="relative block aspect-[368/239]"
        >
          <Image
            src={`${Config.ipPUBLIC}/images/${gambar}`}
            alt={judul_berita}
            fill
          />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link href={`/berita-pemuda/${id}`}>
              {" "}
              {/* Ganti dengan slug */}
              {`${judul_berita ? judul_berita.slice(0, 40) : "Judul tidak tersedia"}...`}
            </Link>
          </h3>
          <p className="text-sm text-gray-500">{tanggal_berita}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
