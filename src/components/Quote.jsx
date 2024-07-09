import React from 'react';

const Quote = () => {
    return (
        <div className="flex items-center justify-center bg-gray-100 min-h-screen p-4">
            <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
                <p className="text-orange-500 font-medium text-sm mb-2">Get A Quote For Free</p>
                <h2 className="text-3xl font-bold mb-4">Request A Free Quote</h2>
                <p className="text-gray-600 mb-6">Brook presents your services with flexible, convenient and composed layouts. You can select your favorite layouts & elements for.</p>
                <form>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <input type="text" placeholder="Name" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="email" placeholder="Email" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="text" placeholder="Contact Number" className="border border-gray-300 rounded-md p-2 w-full sm:col-span-2" />
                        <select className="border border-gray-300 rounded-md p-2 w-full">
                            <option value="">Freight Type</option>
                            <option value="road_freight">Road Freight</option>
                            <option value="air_freight">Air Freight</option>
                            <option value="sea_freight">Sea Freight</option>
                        </select>
                        <input type="text" placeholder="City of Departure" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="text" placeholder="Incoterms" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="text" placeholder="Weight" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="text" placeholder="Height" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="text" placeholder="Width" className="border border-gray-300 rounded-md p-2 w-full" />
                        <input type="text" placeholder="Length" className="border border-gray-300 rounded-md p-2 w-full" />
                    </div>
                    <div className="mb-4">
                        <p className="mb-2">Extra services:</p>
                        <div className="flex flex-wrap items-center gap-4">
                            <label className="flex items-center">
                                <input type="radio" name="extra_service" className="mr-2" />
                                Freight
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="extra_service" className="mr-2" />
                                Express Delivery
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="extra_service" className="mr-2" />
                                Insurance
                            </label>
                            <label className="flex items-center">
                                <input type="radio" name="extra_service" className="mr-2" />
                                Packaging
                            </label>
                        </div>
                    </div>
                    <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition-colors">
                        Request A Quote
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Quote;
