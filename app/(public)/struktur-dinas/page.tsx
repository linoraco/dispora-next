import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Halaman Berita - Dinas Pendidikan Daerah Provinsi Sulawesi Utara",
  description:
    "Ini adalah halaman berita Dinas Pendidikan Daerah Provinsi Sulawesi Utara",
};

const NewsPage = () => {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        {" "}
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex-col pt-28">
            <h1 className="text-center text-3xl font-bold text-black dark:text-white max-md:text-xl">
              Struktur Organisasi
            </h1>
            <hr className=" " />
            <div className="mb-20 mt-20 rounded-xl bg-white py-10 dark:bg-transparent md:mx-[8%] lg:mx-[10%] xl:mx-[15%]">
              <div className="relative aspect-[700/444] w-full">
                <Image
                  className="dark:hidden"
                  src="/images/hero/struktur-dinas.png"
                  alt="struktur-dinas"
                  fill
                />
              </div>
              <div className="mx-[10%] text-black dark:text-white">
                <p className="text-sm sm:text-lg lg:text-xl">Keterangan : </p>
                <p className="mt-2 text-sm sm:text-lg lg:text-xl">
                  Fungsional Bidang Pemuda :
                </p>
                <p className="md:text-md text-xs sm:text-sm lg:text-lg">
                  1. Fungsionaris Kepemimpinan dan Kepeloporan, Kemitraan dan
                  Kewirausahaan Pemuda (FK4) Fungsional
                </p>
                <p className="md:text-md text-xs sm:text-sm lg:text-lg">
                  2. Fungsionaris Peningkatan Wawasan,Kapasitas dan Kreatifitas
                  Pemuda (FWK2P)
                </p>
                <p className="md:text-md text-xs sm:text-sm lg:text-lg">
                  3. Fungsionaris Organisasi Kepemudaan, Kepramukaan, dan
                  Standarisasi Pemuda (FOK2SP)
                </p>
                <p className="mt-2 text-sm sm:text-lg lg:text-xl">
                  Bidang Olahraga :{" "}
                </p>
                <p className="md:text-md text-xs sm:text-sm lg:text-lg">
                  1. Fungsionaris Olahraga Pendidikan dan Sentra Olahraga
                  (FOPSO){" "}
                </p>
                <p className="md:text-md text-xs sm:text-sm lg:text-lg">
                  2. Fungsionaris Olahraga Rekreasi Masyarakat dan Layanan
                  Khusus (FORMLK){" "}
                </p>
                <p className="md:text-md text-xs sm:text-sm lg:text-lg">
                  3. Fungsionaris Kemitraan dan Penghargaan Olahraga (FKPO)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
