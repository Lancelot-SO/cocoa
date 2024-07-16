import React, { useState } from 'react';
import blogbg from "../assets/c2.jpg";
import blog1 from "../assets/Cacaodemia.jpg";
import blog2 from "../assets/article2.jpg";
import Breadcrumb from '../components/Breadcrumb';

const Blog = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div className="relative">
                <img src={blogbg} alt='service' className='w-full h-[730px] object-cover' />
                <div className='absolute top-[70%] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                    <h2 className='text-[24px] md:text-[24px] lg:text-[80px] font-bold tracking-wider text-white'>Our Blog</h2>
                    <Breadcrumb />
                </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-800 px-6 py-4 text-center">Our Blog</h2>

            <div className='flex flex-col lg:flex-row gap-4 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
                <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
                    <div className="flex items-center justify-center">
                        <img src={blog1} alt="Blog" className="w-full" />
                    </div>
                    <div className="px-6 py-4">
                        <h2 className='text-2xl font-bold mb-2'>Impact of Covid 19 on production</h2>
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

                <div className="max-w-xl mx-auto bg-white shadow-md rounded-lg overflow-hidden my-8">
                    <div className="flex items-center justify-center">
                        <img src={blog2} alt="Blog" className="w-full h-[320px]" />
                    </div>
                    <div className="px-6 py-4">
                        <h2 className='text-2xl font-bold mb-2'>Cocoa production and sustainability</h2>
                        <p className="text-gray-700 text-base">
                            How can cocoa production be sustainable?
                            Due to globalization and consumer awareness, sustainability in the food production chain has become a basic requirement.
                            The cocoa industry strives to meet the huge demand that is now more focused than ever on the adoption of good farming methods
                            and responsible management of natural resources. Sustainable cocoa production is based on quality guidelines and standards,
                            and is characterized by production, environmental and social benefits.

                            A good sustainability plan provides a series of tools, training and guidelines for large and small producers.
                        </p>
                        <button className='text-blue-500 cursor-pointer' onClick={toggleVisibility}>
                            {isVisible ? "Read Less..." : "Read More..."}
                        </button>
                        {isVisible && (
                            <p className="text-gray-700 text-base mt-4">
                                In this way, consumers’ commitment to environmental protection, proper land use and fair economic recognition of
                                farmers and communities involved in the production process is fulfilled.

                                Through international certifications, many organizations monitor and ensure the sustainability of crops. In this way,
                                organizations such as Fair Trade, Rainforest Alliance, Organic and UTZ, make possible the production of a pure grain that
                                faithfully follows good cultivation practices and differs significantly from a market dominated by the exploitation of soils and communities.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
