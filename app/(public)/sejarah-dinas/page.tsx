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
          <ul className="timeline timeline-snap-icon max-lg:timeline-compact timeline-vertical text-black dark:text-white">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <time className="font-mono italic max-md:text-sm">2003</time>
                <div className="text-lg font-black max-md:text-sm">
                  Terbentuk Dinas Pendidikan Pemuda Dan Olahraga
                </div>
                <p className="text-justify max-md:text-sm">
                  Undang-Undang Nomor 10 Tahun 2003 tentang Pembentukan
                  Kabupaten Minahasa Selatan dan Kota Tomohon di Propinsi
                  Sulawesi Utara. merupakan dasar pembemtukan organisasi
                  perangkat Daerah sebagai daerah otonom yang baru. Pada bulan
                  Oktober Tahun 2003 terbentuk Pemerintah Kabupaten Minahasa
                  Selatan dimana Penjabat Bupati Minahasa Selatan yaitu Bapak
                  Ramoy Luntungan menetapkan Organisasi Perangkat Daerah antara
                  lain Dinas Pendidikan, Pemuda dan Olahraga. Dengan demikian
                  urusan Pemerintah Daerah bidang Kepemudaan dan Keolahragaan
                  menjadi Tugas Pokok dan Funngsi dari Dinas Pendidikan,Pemuda
                  dan Olahraga sejak tahun 2003. Pada Tahun 2016 saat pimpinan
                  Bupati Christiany Eugenia Paruntu dan Wakil Bupati Franky
                  Donny Wongkar merencanakan pemekaran dinas Pemuda dan Olahraga
                  terpisah dari Dinas Pendidikan dan kepemudaan serta Olaharaga
                  sesuai Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan
                  Daerah dan Peraturan Pemerintah Republik Indonesia Nomor 18
                  Tahun 2016 tentang Perangkat Daerah.
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-10 max-md:text-sm">
                <time className="font-mono italic max-md:text-sm">2016</time>
                <div className="text-lg font-black max-md:text-sm">
                  Dinas Pemuda dan Olahraga
                </div>
                <div className="text-justify">
                  ​Pada Tahun 2016 berdasarkan Perda Nomor 6 Tahun 2016 tentang
                  Pembentukan dan Susunan Perangkat Daerah belum dapat
                  dimekarkan dinas Pemuda dan Olahraga. Selang Tahun 2016-2022
                  yang menangani bidang Kepemudaan dan Keolaragaan ditangani
                  oleh kepala bidang.
                </div>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 max-md:text-sm md:text-end">
                <time className="font-mono italic max-md:text-sm">
                  2023 - sekarang
                </time>
                <div className="text-lg font-black max-md:text-sm">
                  Dinas Pemuda dan Olahraga
                </div>
                <div className="text-justify">
                  Kepala daerah dan wakil kepala daerah Kabupaten Minahasa
                  Selatan yang baru yaitu bapak Bupati Frangky Donny Wongkar,SH
                  dan bapak Wakil Bupati Pdt Petra Yanny Rembang,MTh didukung
                  Anggota DPRD Kabupaten Minahasa Selatan menyetujui pembahasan
                  perubahan Organisasi Perangkat Daerah yang baru. Pada awal
                  tahun 2022 diperdakan Peraturan Daerah Nomor 1 Tahun 2022
                  tentang pembentukan Organisasi Perangkat Daerah yang baru
                  yaitu salah satunya adalah Dinas Pemuda dan Olahraga. Perda
                  Nomor 01 Tahun 2022 tentang pembentukan Perangkat daerah baru
                  dimana Dinas Pendidikan serta kepemudaan dan olahraga berubah
                  menjadi Dinas Pendididikan dan Kebudayaan (Dikbud) dan Dinas
                  Pemuda dan olahraga (PORA) Kabupaten Minahasa Selatan. Pada
                  bulan Maret Tahun 2022 Dinas Pemuda dan olahraga di tangani
                  oleh pejabat eselon 2 (dua) yang pertama yakni Bpk. DR.Fietber
                  Soleman Raco,MSi oleh Bpk Bupati Minahasa selatan, Bpk Franky
                  Donny Wongkar,SH, Kemudian satu bulan kemudian telah terisi
                  pengemban tugas dan fungsi dengan dilantiknya pejabat eselon 3
                  (tiga) yang pertama untuk Sekretaris Dinas Bpk Edwin Fewald
                  Lonteng MSi dan dua kepala bidang yang pertama yakni Kepala
                  bidang Pemuda Ibu Erny Mamengko,SE dan Kepala Bidang Olahraga
                  Ibu Nitje Durant SE dan Kasubag Umum Bpk Joke Riel Soyow,Sos,
                  serta jabatan fungsional dalam persyaratan sebagai Organisasi
                  Perangkat Daerah. Pada bulan April Tahun 2023 telah ada
                  pergeseran pejabat yang baru yakni bpk Juan Rondonuwu,SH
                  dilantik menjadi kepala bidang Pemuda yang baru, kemudian
                  telah di SK bendahara Dinas Pemuda Olahraga yakni Bpk Alfredo
                  F.Pontolaeng,SSos yang pertama. Pada tahun 2023 jumlah
                  personalia berjumlah 30 oragng yakni ASN berjumlah 16 org,
                  PPPK berjumlah 14 orang dan THL berjumlah 4 orang.
                </div>
              </div>
              <hr />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
