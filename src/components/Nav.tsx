import React from 'react';
import { RiHomeLine } from "react-icons/ri";
import { MdDiversity1, MdOutlineHotel } from "react-icons/md";
import { PiBagSimpleThin } from "react-icons/pi";


export const Nav:React.FC = () => {
  return (
      <div className='text-center items-center sm:px-32 text-sm lg:px-32 py-20 px-5'>
        <h1 className= 'text-center items-center text-black m-10 font-bold text-4xl'>¿Adonde?</h1>
        <div className='text-center items-center justify-center'>
           <button className='flex text-center items-center justify-center m-auto hover:underline p-2 rounded-full text-black font-bold gap-4'>
             <span className='flex text-center items-center justify-center gap-1 gap-2'>
             <RiHomeLine className='mt-.5' />
             <a href="#">Buscar todo</a>
             </span>
             <span className='flex flex-row'>
             <MdOutlineHotel  className='mt-1' />
             <a href="#">Hoteles</a>
             </span>
             <span className='flex flex-row'>
             <PiBagSimpleThin className='mt-1' />
             <a href="#">Cosas que hacer</a>
             </span>
           </button>
           <br></br>
          <div>
            <input className='flex items-center pl-3 bg-gray-300 rounded-3xl border-2 p-4 px-4 mb-2 mx-auto w-9/12' type="text" placeholder= " 🔍Lugares para visitar, cosas para hacer,hoteles..." />
            <button className='flex items-center justify-center mx-auto px-32 py-2 border-2 border-teal-500 bg-teal-500 text-white transition-all rounded-full'>
              buscar
            </button>
          </div>
       </div>
      </div>
  )
}

export default Nav
