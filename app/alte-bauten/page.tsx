'use client'

import React from 'react'
import Image from 'next/image'

const Alte_bauten = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col gap-6 max-w-2xl text-center mt-20">
        <h1 className="text-3xl font-bold">alte Bauten</h1>

        <p className="text-center mt-20 leading-loose text-gray-500">In alten Bauten stecken Historie und graue Energie.</p>
        <p className='text-gray-500'>Diese wertvollen Ressourcen bewahren wir und kombinieren sie mit Neuem.</p>
        <p className='text-gray-500'>Sie erleben modernes Wohnen | Arbeiten voll guter Energie und Geschichte.</p>

      </div>

      <div className="flex flex-col gap-6 mt-8 w-full max-w-4xl">
        <Image
          src="/h_website/alte_bauten/1.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Carport im Stil von Manchester um 1900</p>
        <Image
          src="/h_website/alte_bauten/2.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>alte Bausubstanz und moderne Elemente</p>
        <Image
          src="/h_website/alte_bauten/3.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>der Neidkopf beschützt das alte Haus</p>
        <Image
          src="/h_website/alte_bauten/4.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>Villa Kätchen bekommt ein Namensschild</p>
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

export default Alte_bauten
