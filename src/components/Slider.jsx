import React from 'react'

const Slider = ({ item }) => {
    return (
        <div>
            <img src={item.image} alt='cocoa' className='w-full h-[800px] object-cover' />
        </div>
    )
}

export default Slider