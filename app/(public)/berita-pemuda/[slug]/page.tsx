// app/(public)/berita-pemuda/[slug]/page.tsx (Server Component)

import Config from "@/app/config/config";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const response = await fetch(`${Config.ipPUBLIC}/berita/${params.slug}`, {
    cache: "no-store",
  });

  // Cek apakah respons API berhasil
  if (!response.ok) {
    console.error("Failed to fetch data:", response.statusText);
    return <div>Data not found or there was an error.</div>;
  }

  const data = await response.json();

  // Cek apakah data ada dan bukan null
  if (!data) {
    return <div>No data available.</div>;
  }

  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:mx-[15%] lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
          <div className="mb-10 w-full overflow-hidden">
            <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
              {data.gambar ? (
                <Image
                  src={`${Config.ipPUBLIC}/images/${data.gambar}`} // Gunakan data.gambar
                  alt={data.judul_berita} // Gunakan data.judul_berita
                  fill
                  className="rounded-md object-cover object-center"
                />
              ) : (
                <div>No image available.</div> // Penanganan jika tidak ada gambar
              )}
            </div>
          </div>

          <h2 className="mb-5 mt-11 text-center text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
            {data.judul_berita}
          </h2>

          <ul className="mb-9 flex flex-col gap-5 2xl:gap-7.5">
            <li>
              <span className="text-black dark:text-white">Author: </span>{" "}
              {data.nama_pembuat_berita || "Unknown"}
            </li>
            <li>
              <span className="text-black dark:text-white">
                Published On: {data.tanggal_berita || "Unknown Date"}
              </span>
            </li>
          </ul>

          <div>
            <p>{data.isi_berita}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
