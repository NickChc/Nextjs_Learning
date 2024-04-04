import { pictures } from "@/app/photo-feed/pics";
import { Modal } from "@/components/Modal";
import Image from "next/image";

interface PhotoIdProps {
  params: {
    id: string;
  };
}

export default function ImgId({ params }: PhotoIdProps) {
  const picture = pictures.find((pic) => pic.id === params.id)!;

  return (
    <Modal>
      <div>
        <Image
          layout="fill"
          src={picture.src}
          alt={picture.name}
          className="max-w-full object-cover aspect-square z-10  "
        />
        <h1>MODAL PICTURE BY : {picture.photographer}</h1>
      </div>
    </Modal>
  );
}
