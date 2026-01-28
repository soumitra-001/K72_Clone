import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='text-[Lausanne500] pt-5 text-center'>
            <div className='text-[9vw] justify-center flex items-start uppercase leading-[8vw]' >L'étincelle</div>
            <div className='text-[9vw] justify-center flex items-start uppercase leading-[8vw]'>qui<div className='h-[7vw] w-[18vw] rounded-full overflow-hidden'><Video /></div>génère</div>
            <div className='text-[9vw] justify-center flex items-start uppercase leading-[8vw]'>la créativité</div>
        </div>
    )
}

export default HomeHeroText