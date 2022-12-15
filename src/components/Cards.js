import React from 'react'
import data from '../data/data'
const MyApp = ({data}) => {
  return (
    <>
      <div className='w-[24%] text-align:center  rounded-lg '>
        <div>
          <img src={data.img} className='rounded-lg' alt='pizza' />
        </div>
        <div className='p-2 text-center bg-gray-200'>
          <h2 className='text-2xl font-bold'>{data.name}</h2>
          <h4 className='font-bold'> ${data.price}.99</h4>
        </div>
        <div className='w-full bg-teal-500  text-xl text-white text-center'>
          <button className='p-2'>Add to cart</button>
        </div>
      </div>
    </>
  )
}

const Cards = () => {
  return (
    <>
      <h1 className='text-center text-5xl p-3'> FOOD KART </h1>
      <div className='flex flex-wrap gap-4 py-4 pl-3'>
    {
      data.map((data,index)=>{
        return(
          <MyApp data={data} key={index}/>
        )
      })
    }

      </div>
    </>
  )
}

export default Cards
