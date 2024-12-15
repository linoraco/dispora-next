// components/Blog/DetailsBlog.tsx
"use client";

import React from "react";
import Image from "next/image";
import parse from "html-react-parser";
import { exampleContent } from "./example";

const DetailsBlog = ({ data }) => {
  // Cek apakah data null atau undefined sebelum destrukturisasi
  if (!data) {
    return <div>Loading...</div>;
  }

  // Lakukan destrukturisasi setelah pengecekan data
  const { judul_berita, tanggal_berita, gambar, id } = data;

  return (
    <div className="lg:w-2/3">
      <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
        <div className="mb-10 w-full overflow-hidden">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image
              src={gambar || "/images/blog/blog-01.png"}
              alt={judul_berita || "Blog Image"}
              fill
              className="rounded-md object-cover object-center"
            />
          </div>
        </div>

        <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
          {judul_berita}
        </h2>

        <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
          <li>
            <span className="text-black dark:text-white">Author: </span> John
            Doe
          </li>
          <li>
            <span className="text-black dark:text-white">
              Published On: {tanggal_berita}
            </span>
          </li>
          <li>
            <span className="text-black dark:text-white">Category:</span> Events
          </li>
        </ul>

        <div className="blog-details">{parse(`${exampleContent}`)}</div>
      </div>
    </div>
  );
};

export default DetailsBlog;
