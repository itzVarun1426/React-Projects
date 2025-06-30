import React from 'react'

const container = ({ children }) => {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
      <h1 className='text-white text-4xl'>this is children</h1>
    </div>
  )
}

export default container
