"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                Pemerintah Kabupaten Minahasa Selatan
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero">
                Dinas Pemuda Dan Olahraga Kabupaten Minahasa Selatan
              </h1>
              <p className="text-justify`">
                Selamat datang di situs resmi Dinas Pemuda Dan Olahraga
                Kabupaten Minahasa Selatan. Kami berkomitmen untuk meningkatkan
                mutu pendidikan di wilayah ini melalui inovasi dan pelayanan
                terbaik. Di sini, Anda dapat menemukan informasi terbaru tentang
                program pendidikan, layanan bagi tenaga pengajar, serta berbagai
                inisiatif yang kami kembangkan untuk mendukung perkembangan
                Kepemudaan Dan Olahraga di Minahasa Selatan.
              </p>
            </div>

            <div className="animate_right hidden bg-transparent md:w-1/2 lg:block">
              <div className="relative 2xl:-mr-7.5">
                <div className="relative aspect-[700/444] w-full">
                  <Image
                    className="dark:hidden"
                    src="/images/hero/bup-wakilbup.png"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden dark:block"
                    src="/images/hero/bup-wakilbup.png"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
