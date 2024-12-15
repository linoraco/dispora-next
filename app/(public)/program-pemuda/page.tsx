"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Config from "@/app/config/config";
import ProgramPemuda from "@/components/ProgramPemuda/ProgramPemuda";

const NewsPage = () => {
  const [data, setData] = useState([]);

  const getProgram = async () => {
    try {
      const response = await axios.get(`${Config.ipPUBLIC}/program`);
      setData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProgram();
  }, []);

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        {" "}
        {/* {Pemuda} */}
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <h1 className="text-center">OLAHRAGA</h1>
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {data.slice(0, 3).map((blog, key) => (
              <ProgramPemuda blog={blog} key={key} />
            ))}
          </div>
        </div>
        {/* {Pemuda END} */}
      </div>
    </section>
  );
};

export default NewsPage;
