import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div>
             <h1 className='text-3xl font-serif font-bold text-center'> This is <span className='text-green-700'>Pakistan!</span> </h1>
             <p className='m-3 text-center font-serif font-semibold'>Hello viewers! As we all know that our beloved country Pakistan is full of beautiful sights. It has blessed with an infinite range of beauty.Here some of its beautiful sights are given for you all to bless your tumeline. </p>
        <div className='container flex gap-10 pt-5'>' 
        <div>
                <Image className='h-800 w-950 float-right px-8' src="/Attabad-Lake-.webp"
                    height={800}
                    width={950}
                    alt='LAKE'
                />
                <h1 className='text-center font-serif font-bold text-blue-700 bg-blue-200'>ATTABAD-LAKE</h1>
            </div>
         
      
          <div>
                <Image className='h-800 w-950 float-right px-8' src="/Naran-Kaghan.webp"
                    height={800}
                    width={950}
                    alt='LAKE'
                />
                <h1 className='text-center font-serif font-bold text-blue-700 bg-blue-200'>NARAN KAGHAN </h1>
            </div>
          <div>
                <Image className='h-800 w-950 float-right px-8' src="/Hunza Valley.webp"
                    height={800}
                    width={950}
                    alt='LAKE'
                />
                <h1 className='text-center font-serif font-bold text-blue-700 bg-blue-200'>HUNZA VALLEY</h1>
            </div>
         
        </div>
        <div className='container flex gap-10 pt-5'>' 
        <div>
                <Image className='h-800 w-950 float-right px-8' src="/Concordia.webp"
                    height={800}
                    width={950}
                    alt='LAKE'
                />
                <h1 className='text-center font-serif font-bold text-blue-700 bg-green-200'>CONCORDIA</h1>
            </div>
         
      
          <div>
                <Image className='h-800 w-950 float-right px-8' src="/Pir-Sohawa-.webp"
                    height={800}
                    width={950}
                    alt='LAKE'
                />
                <h1 className='text-center font-serif font-bold text-blue-700 bg-green-200'>PIR-SOHAWA </h1>
            </div>
          <div>
                <Image className='h-800 w-950 float-right px-8' src="/Badshahi-Mosque.webp"
                    height={800}
                    width={950}
                    alt='LAKE'
                />
                <h1 className='text-center font-serif font-bold text-blue-700 bg-green-200'>BADSHAHI MOSQUE</h1>
            </div>
         
        </div>
       
        </div>
    )
}

export default Hero
