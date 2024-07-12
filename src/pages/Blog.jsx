import React from 'react'
import blogbg from "../assets/c2.jpg"
import blog1 from "../assets/Cacaodemia.jpg"
import Breadcrumb from '../components/Breadcrumb'

const Blog = () => {
    return (
        <div>
            <div className="relative ">
                <img src={blogbg} alt='service' className='w-full object-cover' />
                <div className='absolute top-[70%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-white'>Our Blog</h2>
                    <Breadcrumb />
                </div>
            </div>

            <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
                <h2 className="text-2xl font-bold text-gray-800 px-6 py-4">Our Blog</h2>
                <div className="flex items-center justify-center">
                    <img src={blog1} alt="Blog" className="w-full" />
                </div>
                <div className="px-6 py-4">
                    <p className="text-gray-700 text-base">
                        Cocoa, like other commodities traded on international markets, experienced significant variations
                        during the pandemic. Consumption rose during the pandemic, even though markets were expecting a
                        demand contraction on the consumer side. Chocolate, one of its derivative products, was an exception
                        since demand fell with the temporary shut-downs of hotels, restaurants and airports. At the same time,
                        the cocoa marketing chain remained active, with 2020 being a good year in terms of production and quality.
                        Farmers had the opportunity to dedicate themselves to improving their production process,
                        allowing them to achieve higher quality beans and thus, an increase in exports.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Blog