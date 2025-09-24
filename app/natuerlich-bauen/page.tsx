'use client'

import React from 'react'
import Image from 'next/image'

const Natuerlich_bauen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col gap-6 max-w-2xl text-center mt-20">
        <h1 className="text-3xl font-bold">natürlich bauen</h1>

        <p className="text-center mt-20 leading-loose">Neubauten müssen kein Zwischenlager für Sondermüll sein.</p>
        <p className='text-gray-500'>Wir setzen natürliche Baustoffe möglichst trennbar zusammen.</p>
        <p className='text-gray-500'>Sie erleben eine vitale Atmosphäre in recyclebaren Bauten.</p>

      </div>

      <div className="flex flex-col gap-6 mt-8 w-full max-w-4xl">
        <Image
          src="/natuerlich_bauen/1.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p>Sichtmauerwerk mit Traßkalkfugen</p>
        <Image
          src="/natuerlich_bauen/2.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Bett aus Kirschbaum mit Zierzinken</p>
        <Image
          src="/natuerlich_bauen/3.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Strohballensauna mit Lehmputz aus dem Garten</p>
        <Image
          src="/natuerlich_bauen/4.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>ein altes Astloch bleibt in der Fensterbank</p>

        <Image
          src="/natuerlich_bauen/5.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Fahrradschuppen und Sauna mit Ruhebereich</p>
      </div>

            <div className="flex flex-row justify-center mt-12 mb-12">
      <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
      <span>↑</span>
      <span>Back to Top</span>
      </button>
      </div>
    </div>
  )
}

export default Natuerlich_bauen
