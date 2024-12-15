"use client"; // Ensure this page is rendered client-side only

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic"; // For dynamic imports

// Dynamically import ReactWhatsapp to ensure client-side rendering
const ReactWhatsapp = dynamic(() => import("react-whatsapp"), { ssr: false });

const NewsPage = () => {
  return (
    <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
      <div className="container mx-auto">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="flex items-center justify-center">
            <h1 className="mt-20 text-center text-lg text-black dark:text-white sm:text-xl md:text-2xl lg:text-3xl">
              Program Beasiswa
            </h1>
          </div>

          <hr className="mx-[10%] my-10" />

          <div className="mx-0 flex items-center justify-center">
            <Image
              className="rounded-xl py-10 min-[320px]:mx-[10%] sm:mx-[10%] md:mx-[15%] lg:mx-[20%] xl:mx-[20%]"
              src="/images/brosur/brosurBEA2024.jpg"
              alt="Brosur Beasiswa 2024"
              width={1000}
              height={1200}
            />
          </div>

          <div className="mx-[10%] mb-20 flex items-center text-black md:mx-[15%] lg:mx-[20%] xl:mx-[20%]">
            <div className="px-4">
              <Link
                href="/program-beasiswa/form-beasiswa"
                className="mt-1 rounded-xl bg-[#D9D9D9] p-1 text-xs duration-300 hover:-translate-y-1 hover:bg-green-400 sm:p-2 sm:text-[16px] min-[768px]:p-3"
              >
                Daftar Sekarang
              </Link>
            </div>
            <div className="px-4">
              <ReactWhatsapp
                element="button"
                number="+62 82188884401"
                message="Hello, I'm interested in the scholarship program!"
                className="mt-1 rounded-xl bg-[#D9D9D9] p-1 text-xs duration-300 hover:-translate-y-1 hover:bg-green-400 sm:p-2 sm:text-[16px] min-[768px]:p-3"
              >
                Kontak Admin (Marchel)
              </ReactWhatsapp>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsPage;
