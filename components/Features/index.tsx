"use client";

import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "../Blog/BlogItem";
import axios from "axios";
import Config from "app/config/config.js";
import { useState, useEffect } from "react";
import BeritaOlahraga from "../BeritaOlahraga/BeritaOlahraga";

const Feature = () => {
  const [data, setData] = useState([]);
  const [dataOlahraga, setDataOlahraga] = useState([]);

  const getBerita = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getBeritaOlahraga = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/beritaolahraga`);
      setDataOlahraga(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBerita();
    getBeritaOlahraga();
  }, []);
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
                "Informasi Terbaru dari Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan",
              description:
                "Dapatkan berita terbaru, pengumuman penting, dan perkembangan terkini seputar dunia kepemudaan dan Olahraga di Minahasa Selatam. Kami menyajikan informasi yang relevan untuk mendukung kemajuan pendidikan di wilayah ini.",
            }}
          />

          {/* <!-- Section Title End --> */}

          {/* {PEMUDA} */}
          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <h1 className="text-center">KEPEMUDAAN</h1>
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {data.slice(0, 3).map((blog, key) => (
                <BlogItem blog={blog} key={key} />
              ))}
            </div>
          </div>
          {/* {PEMUDA END} */}

          {/* {OLAHRAGA} */}
          <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
            <h1 className="text-center">OLAHRAGA</h1>
            <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
              {dataOlahraga.slice(0, 3).map((blog, key) => (
                <BeritaOlahraga blog={blog} key={key} />
              ))}
            </div>
          </div>
          {/* {OLAHRAGA END} */}
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
