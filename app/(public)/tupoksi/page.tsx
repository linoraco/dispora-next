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
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="text-black dark:text-white">
            <div className="mx-[10%] mt-20 md:mx-[15%] lg:mx-[20%]">
              <h1 className="mt-1 text-justify text-sm font-semibold sm:text-lg lg:text-xl">
                TUGAS POKOK:
              </h1>
              <p className="md:text-md mt-5 text-justify text-xs sm:text-sm lg:text-lg">
                Berdasarkan Peraturan Gubernur No. 57 Tahun 2022, Dinas Pemuda
                dan Olahraga mempunyai tugas menyelenggarakan urusan
                pemerintahan bidang kepemudaan dan olahraga yang menjadi
                kewenangan daerah.
              </p>
            </div>

            <div className="mx-[10%] mt-20 md:mx-[15%] lg:mx-[20%]">
              <h1 className="mt-1 text-justify text-sm font-semibold sm:text-lg lg:text-2xl">
                FUNGSI:
              </h1>

              <p className="md:text-md mt-5 text-justify text-xs sm:text-sm lg:text-lg">
                <ol className="list-disc">
                  <li className="mt-10px">
                    penyusunan Rencana Strategis, Rencana Kerja, dan Rencana
                    Kerja dan Anggaran Dinas Pemuda dan Olahraga;
                  </li>
                  <li className="mt-10px">
                    pelaksanaan Rencana Strategis dan Dokumen Pelaksanaan
                    Anggaran Dinas Pemuda dan Olahraga;
                  </li>
                  <li className="mt-10px">
                    perumusan dan pelaksanaan kebijakan, proses bisnis, standar,
                    dan prosedur Dinas Pemuda dan Olahraga;
                  </li>
                  <li className="mt-10px">
                    perumusan, pengoordinasian dan pelaksanaan kebijakan urusan
                    pemerintahan di bidang kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pemantauan dan evaluasi pelaksanaan urusan pemerintahan di
                    bidang kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pembinaan, pengawasan dan pengendalian urusan pemerintahan
                    di bidang kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pelaksanaan kerja sama dan koordinasi dengan PD/UKPD
                    dan/atau instansi pemerintah/swasta/organisasi dalam
                    pelaksanaan urusan pemerintahan di bidang kepemudaan dan
                    olahraga;
                  </li>
                  <li className="mt-10px">
                    pengelolaan data dan sistem informasi serta transformasi
                    digital di bidang kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pelaksanaan pengawasan dan pengendalian perizinan dan non
                    perizinan di bidang kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pengawasan dan penindakan sesuai dengan ketentuan peraturan
                    perundang-undangan di bidang kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pemberian dukungan teknis kepada masyarakat dan perangkat
                    daerah di bidang kepemudaan dan olahraga;
                  </li>
                  <li>
                    pelaksanaan kesekretariatan Dinas Pemuda dan Olahraga;
                  </li>
                  <li className="mt-10px">
                    pelaksanaan penyediaan dan pengelolaan prasarana dan sarana
                    kepemudaan dan olahraga;
                  </li>
                  <li className="mt-10px">
                    pelaksanaan koordinasi, pemantauan, evaluasi, pelaporan dan
                    pertanggungjawaban pelaksanaan tugas dan fungsi Dinas Pemuda
                    dan Olahraga; dan
                  </li>
                  <li className="mt-10px">
                    pelaksanaan tugas dan fungsi kedinasan lain yang diberikan
                    oleh Gubernur dan/atau Sekretaris Daerah.
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
