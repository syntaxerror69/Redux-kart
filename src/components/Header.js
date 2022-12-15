import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
    return (
        <div className='justify-between flex bg-green-500 items-center '>
            <div className=' px-3 py-2 text-white  text-2xl'> FOOD KART </div>
            <div className=''>
                <input type='text' placeholder='Enter here your wants! ' className='p-2 text-xl rounded-l-lg ' size='40'/>
                <button className='p-2 text-xl bg-orange-300 rounded-r-lg'>Go</button>
            </div>
            <div className='px-3 py-2 text-xl '> <AiOutlineShoppingCart className='text-5xl'/></div>

        </div>

    )
}

export default Header