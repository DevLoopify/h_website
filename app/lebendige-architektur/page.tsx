'use client'

import React from 'react'
import Image from 'next/image'

const Lebendige_architektur = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col gap-6 max-w-2xl text-center mt-20">
        <h1 className="text-3xl font-bold">lebendige Architektur</h1>

        <p className="text-center mt-20 leading-loose text-gray-500">Konstantin Kirsch lässt Gebäude aus Bäumen wachsen.</p>
<p className='text-gray-500'>Inspiriert von seinem Schaffen pflanzen wir Zäune und Lauben.</p>
<p className='text-gray-500'>Sie erleben lebendige Architektur, die das Mikroklima verbessert.</p> 
        
      </div>

      <div className="flex flex-col gap-6 mt-8 w-full max-w-4xl">
        <Image
          src="/lebendige_architektur/1.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>der lebendige Zaun teilt den entsiegelten Hof</p>
        <Image
          src="/lebendige_architektur/2.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>ein lebendiger Weidenzaun entsteht</p>
        <Image
          src="/lebendige_architektur/3.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>der Knotenpunkt aus Bergahorn ist fest verwachsen</p>
        <Image
          src="/lebendige_architektur/4.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>hier wächst bald ein Sichtschutz</p>
                <Image
          src="/lebendige_architektur/5.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <p className='text-gray-500'>die Laube aus Weiden auf dem Pausenhof</p>
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
