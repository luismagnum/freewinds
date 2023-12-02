import React from 'react'

export const Home:React.FC = () => {
  return (
    <div className='min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url(https://media.istockphoto.com/id/510162540/es/foto/chef-cocina-con-sart%C3%A9n.jpg?s=612x612&w=0&k=20&c=0yiaTTfG1WxKaiPMi8EOG50JY0-E9j32JFSVKtMTa3o=)] bg-cover bg-no-repeat'>
      <div className='w-full lg:w-2/3 space-y-5'>
        <h1 className= 'text-white mt-20 mb-[-10] font-bold text-4xl'>Restaurantes ganadores del premio travellers`Choice -
        Lo mejor de lo Mejor</h1>
        <p className='text-white text-xl'>
            Desde restaurantes elegantes hasta favoritos de la colonia: los resultados ya estan aqui.
           
        </p>
        <div className='lg:pl-44'>
           <button className='border-2  bg-white p-2 rounded-full text-black font-bold'>
             <a href="#">Ver los ganadores</a>
           </button>
       </div>
      </div>
    </div>
  )
}

export default Home