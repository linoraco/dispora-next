import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    newTab: false,
    path: "/",
  },
  {
    id: 2.1,
    title: "Profil",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Sejarah Dinas",
        newTab: false,
        path: "/sejarah-dinas",
      },
      {
        id: 34,
        title: "Visi Misi",
        newTab: false,
        path: "/visi-misi",
      },
      {
        id: 35,
        title: "Tupoksi",
        newTab: false,
        path: "/tupoksi",
      },
      {
        id: 36,
        title: "Struktur Dinas",
        newTab: false,
        path: "/struktur-dinas",
      },
    ],
  },
  {
    id: 2.3,
    title: "Dokumen",
    newTab: false,
    path: "/dokumen",
  },
  {
    id: 3,
    title: "Berita Dan Pengumuman",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Berita Pemuda",
        newTab: true,
        path: "berita-pemuda",
      },
      {
        id: 34,
        title: "Berita Olahraga",
        newTab: true,
        path: "berita-olahraga",
      },
    ],
  },
  {
    id: 4,
    title: "Program",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Program Pemuda",
        newTab: true,
        path: "program-pemuda",
      },
      {
        id: 34,
        title: "Program Olahraga",
        newTab: true,
        path: "program-olahraga",
      },
      {
        id: 34,
        title: "Program Beasiswa",
        newTab: true,
        path: "program-beasiswa",
      },
    ],
  },

  {
    id: 5,
    title: "Galeri",
    newTab: false,
    path: "/galeri",
  },

  {
    id: 6,
    title: "Lapor!",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
