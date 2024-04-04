import { StaticImageData } from "next/image";
import Image1 from "@/app/photo-feed/photos/Image1.jpg";
import Image2 from "@/app/photo-feed/photos/Image2.jpg";
import Image3 from "@/app/photo-feed/photos/Image3.jpg";
import Image4 from "@/app/photo-feed/photos/Image4.jpg";
import Image5 from "@/app/photo-feed/photos/Image5.jpg";
import Image6 from "@/app/photo-feed/photos/Image6.jpg";
import Image7 from "@/app/photo-feed/photos/Image7.jpg";

export interface TImage {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
}

export const pictures: TImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: Image1,
    photographer: "Photo by Max van den Oetelaar on Unsplash",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: Image2,
    photographer: "Photo by Reiseuhu on Unsplash",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: Image3,
    photographer: "Photo by Andrea Leopardi on Unsplash",
    location: "Brazil",
  },
  {
    id: "4",
    name: "Machu Picchu",
    src: Image4,
    photographer: "Photo by Jared Schwitzke on Unsplash",
    location: "Peru",
  },
  {
    id: "5",
    name: "Chichen Itza",
    src: Image5,
    photographer: "Photo by E Mens on Unsplash",
    location: "Mexico",
  },
  {
    id: "6",
    name: "Roman Colosseum",
    src: Image6,
    photographer: "Photo by Andrea Cipriano on Unsplash",
    location: "Italy",
  },
  {
    id: "7",
    name: "Taj Mahal",
    src: Image7,
    photographer: "Photo by Su San Lee on Unsplash",
    location: "India",
  },
];
