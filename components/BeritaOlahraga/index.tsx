"use client";
import React from "react";
import SectionHeader from "../Common/SectionHeader";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import BlogData from "./blogData";

const Blog = () => {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `Galeri`,
              subtitle: `Latest photos`,
              description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <Swiper
          breakpoints={{
            340: { slidesPerView: 1, spaceBetween: 15 },
            515: { slidesPerView: 2, spaceBetween: 15 },
            700: { slidesPerView: 3, spaceBetween: 15 },
          }}
          freeMode={true}
          pagination={{ clickable: true }}
          modules={[FreeMode, Pagination]}
        >
          {BlogData.map((blog, key) => (
            <SwiperSlide key={key}>
              <div className="group relative mb-20 flex h-80 cursor-pointer flex-col overflow-hidden rounded-xl px-6 py-8 text-white shadow-lg">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${blog.mainImage})`,
                  }}
                />
                <div className="absolute inset-0 bg-black opacity-10 duration-200 group-hover:opacity-50" />
                <RxArrowTopRight className="absolute bottom-5 left-5 h-[35px] w-[35px] text-white duration-100 group-hover:rotate-45 group-hover:text-blue-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Blog;
