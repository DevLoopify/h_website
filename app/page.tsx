'use client'

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const links = [
    { href: "/innenarchitektur", src: "/h_website/thumbnails/innenarchitektur_thumbnail.jpg", label: "Innenarchitektur" },
    { href: "/alte-bauten", src: "/h_website/thumbnails/alte_bauten_thumbnail.jpg", label: "Alte Bauten" },
    { href: "/natuerlich-bauen", src: "/h_website/thumbnails/natuerlich_bauen_thumbnail.jpg", label: "Natürlich Bauen" },
    { href: "/flexess", src: "/h_website/thumbnails/flexess_thumbnail.jpg", label: "Flexess" },
    { href: "/lebendige-architektur", src: "/h_website/thumbnails/lebendige_architektur_thumbnail.jpg", label: "Lebendige Architektur" },
     { href: "/design", src: "/h_website/thumbnails/design_thumbnail.png", label: "Design" },
  ];

  return (
    <div>
      <div className="bg-gray-700 grid grid-cols-3 grid-rows-2">
        {links.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="relative group  w-full h-full aspect-square block"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={300}
              height={300}
              className="object-cover transition-opacity duration-300 group-hover:opacity-70 w-full h-full aspect-[1/1]"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-xl font-semibold bg-black/50 px-3 py-1 rounded">
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-row justify-center mt-12">
      <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
      <span>↑</span>
      <span>Back to Top</span>
      </button>
      </div>
      

    </div>
  );
}
