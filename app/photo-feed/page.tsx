import Link from "next/link";
import Image from "next/image";
import { pictures } from "@/app/photo-feed/pics";

export default async function Images() {
  return (
    <main className="container mx-auto w-full min-h-dvh">
      <div className="grid grid-cols-4 gap-3">
        {pictures.map((pic) => {
          return (
            <Link
              className="w-full max-h-[200px] overflow-hidden aspect-square object-cover"
              key={pic.id}
              href={`/photo-feed/${pic.id}`}
            >
              <Image
                className="max-w-full max-h-[20dvh]  aspect-square object-cover"
                src={pic.src}
                alt="some image"
              />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
