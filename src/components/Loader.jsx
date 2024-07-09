import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";


const Loader = () => {
    return (
        <div className='flex w-full h-screen items-center justify-center'>
            <ClipLoader
                color={'#1b4137'}
                loading={true}
                size={100}
                aria-label="Loading Spinner"
                data-testid="loader"

            />
        </div>
    )
}

export default Loader