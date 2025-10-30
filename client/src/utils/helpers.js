import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const LINKS = [
  { to: "/", label: "Accueil" },
  // { to: "/neuvieme", label: "9AF" },
  // { to: "/ns4", label: "NS4" },
  { to: "/formules", label: "Formules" },
  { to: "/a-propos", label: "À propos" },
  { to: "/statistiques", label: "Statistiques" },
];

export const COLORS = [
  "from-blue-500 to-blue-800",
  "from-teal-500 to-teal-800",
  "from-purple-500 to-purple-800",
  "from-fuchsia-500 to-fuchsia-800",
  "from-indigo-500 to-indigo-800",
  "from-red-500 to-red-800",
  "from-orange-500 to-orange-800",
  "from-amber-500 to-amber-800",
  "from-cyan-500 to-cyan-800",
  "from-yellow-500/60 to-yellow-800/60",
  "from-red-500/60 to-red-800/60",
  "from-slate-500 to-slate-800",
  "from-emerald-500 to-emerald-800",
];

export const TEAM = [
  {
    name: "John Doe",
    role: "Programmeur full stack",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    description:
      "Passionné par le développement web et les nouvelles technologies.",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "X", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
    ],
  },
  {
    name: "Jane Smith",
    role: "Designer UI/UX",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Passionnée par le design et l'expérience utilisateur.",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "X", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
    ],
  },
  {
    name: "Alice Johnson",
    role: "Chef de projet",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    description: "Passionnée par la gestion de projet et l'organisation.",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "X", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
    ],
  },
  {
    name: "Bob Martin",
    role: "Développeur backend",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Passionné par les systèmes et les bases de données.",
    socialLinks: [
      { platform: "LinkedIn", url: "#" },
      { platform: "X", url: "#" },
      { platform: "Instagram", url: "#" },
      { platform: "Facebook", url: "#" },
    ],
  },
];
