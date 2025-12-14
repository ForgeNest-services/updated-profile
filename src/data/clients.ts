export type Client = {
  id: string;
  name: string;
  logo: string;
  link: string;
};

export const clients: Client[] = [
  {
    id: "indrayani-enterprises",
    name: "Indrayani Enterprises Trade Concern",
    logo: "/images/clients/ietc.png",
    link: "https://ietc.com.np",
  },
  {
    id: "mataindrayani-savings",
    name: "Mataindrayani Savings and Cooperative Limited",
    logo: "/images/clients/mts.png",
    link: "https://www.mataindrayanisaccos.com.np/",
  },
  {
    id: "bhattaguru-astrologer",
    name: "Bhattaguru Astrologer",
    logo: "/images/clients/bhattaguru.png",
    link: "https://www.bhattaguru.com/",
  },
];
