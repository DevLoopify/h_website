'use client'
import React from 'react'
import Image from 'next/image'

const Innenarchitektur = () => {
  return (
    <div className="flex flex-col items-center min-h-screen text-center pb-32">
      <div className="flex flex-col gap-6 max-w-2xl text-center mt-20">
        <h1 className="text-3xl font-bold">innenarchitektur</h1>

        <p className="text-center mt-20 leading-loose text-gray-500">Architektur ist die vom Menschen geschaffene Umgebung.</p>
          <p className='text-gray-500'>Wir jonglieren mit Raumbezügen, Sichtachsen, Materialien, Licht, Akustik und Farben.</p>
          <p className='text-gray-500'>Sie erleben individuell auf Ihre Ansprüche gestaltete Räume.</p>
          
          
      </div>

      {/* 4. Bilder mit Abstand */}
      <div className="flex flex-col gap-6 mt-8 w-full max-w-4xl">
        <Image
          src="/h_website/innenarchitektur/1.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Loftküche in ehemaliger Schlosserei</p>
        <Image
          src="/h_website/innenarchitektur/2.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Popart Architektur mit natürlichem Lehmputz</p>
        <Image
          src="/h_website/innenarchitektur/3.jpeg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Empfang im Baustoffhandel</p>
        <Image
          src="/h_website/innenarchitektur/4.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Showroom für Fensterbau</p>
        <Image
          src="/h_website/innenarchitektur/5.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
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

export default Innenarchitektur
