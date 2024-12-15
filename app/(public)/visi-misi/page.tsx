import { Metadata } from "next";
import Image from "next/image";
import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";

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
        <div className="mx-auto mt-15 max-w-c-1280 px-4 text-black dark:text-white md:px-8 xl:mt-20 xl:px-0">
          <div className="">
            <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%]">
              <h1 className="mt-1 w-auto text-justify text-sm font-semibold sm:text-lg lg:text-2xl">
                Visi
              </h1>
              <p className="md:text-md mt-1 text-justify text-xs sm:text-sm lg:text-lg">
                Visi Dinas Pemuda dan Olahraga Kabupaten Minahasa Selatan
                adalah: <br />
                <span className="font-semibold">
                  {" "}
                  “Membudidayakan insan pemuda yang mandiri dan olahraga
                  berprestasi demi masyarakat Minahasa Selatan maju
                  berkepribadian sehat dan sejahtera”
                </span>
              </p>
            </div>

            <div className="mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[25%]">
              <h1 className="mt-1 text-justify text-sm font-semibold sm:text-lg lg:text-2xl">
                Misi
              </h1>
              <p className="md:text-md mt-5 text-justify text-xs sm:text-sm lg:text-lg">
                <ol className="list-disc">
                  <li className="mt-10px">
                    Meningkatkan Kualitas dan Kuantitas SDM Keolahragaan
                  </li>
                  <li className="mt-10px">
                    Meningkatkan Kualitas dan Kuantitas Sarana dan Prasarana
                    Olahraga
                  </li>
                  <li className="mt-10px">
                    Meningkatkan Partisipasi Masyarakat berolahraga rekreasi dan
                    layanan khusus
                  </li>
                  <li className="mt-10px">
                    Meningkatkan Prestasi Olahraga dan Penghargaan
                  </li>
                  <li className="mt-10px">
                    Meningkatkan Inovasi, kreatifitas dan wirausaha Pemuda
                  </li>
                  <li className="mt-10px">
                    Meningkatkan Indeks Parisipasi Pemuda melalui kepemimpinan,
                    kepelopran dan kesukarelawan pemuda terhadap pembangunan Di
                    desa/kelurahan serta kecamatan
                  </li>
                  <li className="mt-10px">
                    Menurunkan indeks Kenakalan Remaja dan Pemuda
                  </li>
                  <li className="mt-10px">
                    Meningkatkan Dukungan ​Manajemen​ Penatayalanan administrasi
                    Perkantoran.
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
