"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Config from "@/app/config/config";

type GaleriItem = {
  id: number;
  gambar: string;
};

const NewsPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [galeris, setGaleri] = useState<GaleriItem[]>([]);

  // Fungsi untuk berpindah ke slide berikutnya
  const nextSlide = () => {
    setCurrentSlide((prev) =>
      galeris.length > 0 ? (prev + 1) % galeris.length : 0,
    );
  };

  // Mengatur interval untuk pergantian slide otomatis
  useEffect(() => {
    const intervalId = setInterval(nextSlide, 3000);

    // Bersihkan interval saat komponen unmount
    return () => clearInterval(intervalId);
  }, [galeris]);

  // Fungsi untuk mengambil data galeri
  const getGaleri = async () => {
    try {
      const response = await axios.get<GaleriItem[]>(
        `${Config.ipPUBLIC}/galeri`,
      );
      setGaleri(response.data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  useEffect(() => {
    getGaleri();
  }, []);

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="mx-auto max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <h1 className="text-center">KEPEMUDAAN</h1>
          <div className="relative h-[180px] w-full overflow-hidden min-[320px]:h-[200px] min-[350px]:h-[220px] min-[400px]:h-[240px] min-[430px]:h-[250px] min-[500px]:h-[270px] min-[580px]:h-[300px] sm:h-[400px] md:h-[450px]">
            {galeris.map((image, index) => (
              <div
                key={image.id}
                className={`absolute h-full w-full transition-opacity duration-1000 ease-in-out ${
                  currentSlide === index ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  backgroundImage: `url(${`${Config.ipPUBLIC}/galeri/${image.gambar}`})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  minHeight: "100%",
                }}
              ></div>
            ))}
          </div>
        </div>
        <div className="container mx-auto my-10 grid grid-cols-1 place-items-center min-[570px]:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:mt-28 lg:grid-cols-3 xl:grid-cols-3">
          {galeris.map((galeriItem) => (
            <div key={galeriItem.id} className="avatar my-4">
              <div className="w-[200px] rounded-xl shadow-lg min-[360px]:w-[250px] sm:w-64 md:w-72 lg:w-[300px] xl:w-[350px]">
                <img
                  src={`${Config.ipPUBLIC}/galeri/${galeriItem.gambar}`}
                  alt="Gallery Item"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
