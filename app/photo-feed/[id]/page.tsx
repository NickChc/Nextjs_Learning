import { TImage } from "@/app/photo-feed/pics";
import Image from "next/image";
import { pictures } from "@/app/photo-feed/pics";

interface ImageIdProps {
  params: {
    id: string;
  };
}

export default function PhotoId({ params }: ImageIdProps) {
  const currImage: TImage = pictures.find((pic) => pic.id === params.id)!;
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <h2>Picture By: {currImage?.photographer}</h2>
      <Image
      style={{ aspectRatio: "1"}}
        className="w-[80%] object-cover h-[70dvh] "
        src={currImage?.src}
        alt="whatever"
      />
    </div>
  );
}
