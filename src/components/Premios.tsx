import React from 'react';
import img2 from '../images/moto.png';

export const Premios:React.FC = () => {
  return (
    <div className='flex flex-col h-auto lg:flex-row justify-center text-2xl items-center lg:px-32 px-5 gap-8'>
       <img className='sm:7/12 lg:w-5/12' src={img2} alt='' />
    <div className='space-y-4 lg:pt-14'>
      <h1 className='font-semibold text-4xl text-start px-24'>Premios Travellers Choice:'</h1>
      <p className='text-sm lg:text-2xl px-24 font-semibold'>
         Lo mejor 
         de lo Mejor
         Lo decidiste tu:este es nuestro 1%
         mas popular de lugares, estadias,
         restaurantes y experiencias
      </p>
      <div className='flex justify-center lg:justify-start'>
      <button className='mx-auto text-sm font-bold border-2 border-black bg-black px-3 py-2 mb-2 rounded-full text-white'>
           <a href="#">Ver los ganadores</a>
         </button>
      </div>
    </div>
  </div>
  )
}

export default Premios
