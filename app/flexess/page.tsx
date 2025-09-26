'use client'
import React from 'react'
import Image from 'next/image'

const Flexess = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <div className="flex flex-col gap-6 max-w-2xl text-center mt-20">
        <h1 className="text-3xl font-bold">flexess</h1>

        <p className="text-center mt-20 leading-loose text-gray-500">Bionic ist die Technik, die von der Natur inspiriert ist. </p>
            <p className='text-gray-500'>In einem energiegeladenen Prozess,</p>
<p className='text-gray-500'>legen wir mit der Flex organische Formen frei.</p>
<p className='text-gray-500'>Sie erleben individuell für Sie gestaltete Innenarchitektur. </p>

      </div>

      <div className="flex flex-col gap-6 mt-8 w-full max-w-4xl">
        <Image
          src="/h_website/flexess/1.jpg"
          alt="innenarchitektur"
          width={300}
          height={300}
          className="object-cover w-full h-auto"
        />
        <Image
          src="/h_website/flexess/2.jpg"
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

export default Flexess
