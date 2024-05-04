// import Hero from '@/components/Hero'
// import React from 'react'

// const page = () => {
//   return (
//     <div>
//     <Hero/>
//     </div>
//   )
// }

// export default page


import React from 'react'

const page = () => {
  return (

    //--------FLEX------->

    // <div className='flex justify-between items-end flex-wrap text-2xl py-10 bg-black gap-5 '>
    //   <div className='w-1/3 bg-pink-400 px-20 py-20'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi ipsam, quasi libero est Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste distinctio accusamus, </div>
    //   <div className='w-1/3 bg-pink-500 px-20 py-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque dolore et commodi nulla enim </div>
    //   <div className='w-1/3 bg-pink-200 px-20 py-20'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus maiores quidem hic, Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, accusamus culpa sint magnam amet, corrupti aperiam modi commodi iusto ipsum maxime tempora soluta pariatur provident consectetur eligendi aspernatur consequatur dolore! .</div>
    // </div>



    // <div className='bg-blue-200 h-screen flex justify-center items-center font-serif font-bold'>Born Fire</div>

    // <div className='grid grid-cols-[1fr,2fr,auto,4fr] gap-8'>
    //   <div className='bg-red-200 font-bold text-2xl py-10 px-20'>One</div>
    //   <div className='bg-red-400 font-bold text-2xl py-10 px-20'>Two</div>
    //   <div className='bg-red-600 font-bold text-2xl py-10 px-20'>Three</div>
    //   <div className='bg-red-300 font-bold text-2xl py-10 px-20 '>Four</div>
    // </div>\



    //------------Grid------>

    <div className='grid grid-rows-[auto,1fr,auto] font-bold text-2xl h-screen ]'>
      <div className='bg-blue-200 p-4 '>Navbar</div>
      <div className='grid grid-cols-[auto,1fr] '>
        <div className='w-[300px]  bg-pink-200 items-center '>SideBar</div>
        <div className='bg-yellow-200 flex-grow'>Main Content</div>
      </div>
      <div className='bg-orange-500 p-6 '>Footer</div>
    </div>


    
//------------SHEDcn/UI-------->

// installation: copy code from its website and run  it in the termminal than we can use those shedcn libraries simply by copy&paste their codes.These all built-in components are responsive.It is far better than using BOOTSTRAP .



  )
}
export default page
