import React from 'react'

function Heading({heading}) {
  return (
        <h2 className='text-white text-5xl max-lg:text-4xl max-md:text-3xl font-semibold text-center'>{heading}</h2>
  )
}

export default Heading