"use client";

import { useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import SidebarTabs from "@/components/Profile/SidebarTabs";

export default function ProfilePage() {
  const tabs = [
    { label: "Produk Hukum", href: "produk-hukum" },
    { label: "Renstra", href: "renstra" },
    { label: "Renja", href: "renja" },
    { label: "RKT", href: "rkt" },
    { label: "Ringkasan DPA", href: "ringkasan-dpa" },
    { label: "Perjanjian Kinerja Kadis", href: "perjanjian -kinerja-kadis" },
    { label: "Perjanjian Kinerja Sekdis", href: "perjanjian-kinerja-sekdis" },
    {
      label: "Perjanjian Kinerja Kabid Pemuda",
      href: "perjanjian-kinerja-pemuda",
    },
    {
      label: "Perjanjian Kinerja Kabid Olahraga",
      href: "perjanjian-kinerja-olahraga",
    },
    { label: "Perjanjian Kinerja Kasub", href: "perjanjian-kinerja-kasub" },
    { label: "Lakip/Sakip", href: "lakip-sakip" },
    { label: "LPPD", href: "lppd" },
    { label: "Rencana Aksi", href: "rencana-aksi" },
    { label: "Laporan Kinerja", href: "laporan-kinerja" },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].href);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const renderContent = () => {
    switch (activeTab) {
      case "produk-hukum":
        return <p>Coming Soon</p>;
      case "renstra":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/Renstra.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "renja":
        return <p>Coming Soon</p>;
      case "rkt":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/RKT DISPORA 2023.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "ringkasan-dpa":
        return <p>Coming Soon</p>;
      case "perjanjian-kinerja-kadis":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/PERJANJIAN KINERJA KADIS.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "perjanjian-kinerja-sekdis":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/PERJANJIAN KINERJA SEKDIS.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "perjanjian-kinerja-pemuda":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/PERJANJIAN KINERJA KABID PEMUDA.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "perjanjian-kinerja-olahraga":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/PERJANJIAN KINERJA KABID OLAHRAGA.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "perjanjian-kinerja-kasub":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/PERJANJIAN KINERJA KASUB.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "lakip-sakip":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/LAKIP DIKPORA 2023.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "lppd":
        return (
          <div className="pdf-container">
            <Worker
              workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
            >
              <Viewer
                fileUrl="/file/DISPORA LLPD 2023.pdf"
                plugins={[defaultLayoutPluginInstance]}
              />
            </Worker>
          </div>
        );
      case "rencana-aksi":
        return <p>Coming Soon</p>;
      case "laporan-kinerja":
        return <p>Coming Soon</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="pb-16 pt-24 md:pb-20 md:pt-28 lg:pb-24 lg:pt-32">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/4">
              <div className="sticky top-[74px] rounded-lg border border-white p-4 shadow-solid-4 transition-all dark:border-strokedark dark:bg-blacksection">
                <SidebarTabs tabs={tabs} onSelect={setActiveTab} />
              </div>
            </div>

            <div className="w-full px-4 lg:w-3/4">
              <div className="blog-details blog-details-docs shadow-three dark:bg-gray-dark rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]">
                {renderContent()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
