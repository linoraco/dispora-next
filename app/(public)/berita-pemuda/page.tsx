"use client";
import BlogItem from "@/components/Blog/BlogItem";
import axios from "axios";
import Config from "@/app/config/config";
import React from "react";
import { useState, useEffect } from "react";

const NewsPage = () => {
  const [data, setData] = useState([]);

  const getBerita = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/berita`);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBerita();
  }, []);
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        {" "}
        {/* {PEMUDA} */}
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <h1 className="text-center">KEPEMUDAAN</h1>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.map((blog, key) => (
              <BlogItem blog={blog} key={key} />
            ))}
          </div>
        </div>
        {/* {PEMUDA END} */}
      </div>
    </section>
  );
};

export default NewsPage;
