import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Halaman Berita - Dinas Pendidikan Daerah Provinsi Sulawesi Utara",
  description:
    "Ini adalah halaman berita Dinas Pendidikan Daerah Provinsi Sulawesi Utara",
};

const DetailNewsPage = () => {
  return (
    <section className="overflow-hidden pb-25 pt-45 lg:pb-32.5 lg:pt-50 xl:pb-37.5 xl:pt-55">
      Ini adalah halaman detail berita
    </section>
  );
};

export default DetailNewsPage;
