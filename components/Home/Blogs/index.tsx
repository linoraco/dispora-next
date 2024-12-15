"use client";

import React from "react";
import SectionHeader from "../../Common/SectionHeader";
import Blog from "./Blog";
import { blogs } from "./blogs";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "Berita",
              subtitle:
                "Informasi Terbaru dari Dinas Pendidikan Daerah Provinsi Sulawesi Utara",
              description:
                "Dapatkan berita terbaru, pengumuman penting, dan perkembangan terkini seputar dunia pendidikan di Sulawesi Utara. Kami menyajikan informasi yang relevan untuk mendukung kemajuan pendidikan di wilayah ini.",
            }}
          />

          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {blogs.map((blog, key) => (
              <Blog
                description={blog.description}
                image={blog.image}
                title={blog.title}
                id={blog.id}
                key={key}
              />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
