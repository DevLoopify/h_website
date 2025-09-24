'use client'

import React from 'react'
import Image from 'next/image'

const Lebendige_architektur = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col gap-6 max-w-2xl text-center mt-20">
        <h1 className="text-3xl font-bold">design</h1>

        <p className="text-center mt-20 leading-loose text-gray-500">Klare Typografie, passende Bildauswahl und schlichte Komposition</p>
<p className='text-gray-500'>sind unsere gestalterische Spielwiese. </p>
<p className='text-gray-500'>Sie bekommen einen Auftritt, der wahrgenommen und verstanden wird.</p>
        
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

export default Lebendige_architektur
