import React from 'react'

function HeaderItem({name,Icon}) {
  return (
    <div className='text-white flex items-center gap-3 text-[15px] pt-3 font-semibold hover:scale-105 transform ease-in md:hover:underline underline-offset-8 mb-2 '>
         <Icon/>
        <h2 className=''>{name}</h2>
    </div>
  )
}
export default HeaderItem