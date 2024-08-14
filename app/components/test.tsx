import Image from 'next/image'
import React from 'react'

const Test = () => {
    return (
        <div className="relative w-full h-1/3 object-cover">
            <Image
                src={'/images/seattleVidMediaPic.jpg'}
                alt='background-img'
                fill
                className='w-full h-full object-cover'
                priority // Ensure the image loads quickly
            />
        </div>
    )
}

export default Test