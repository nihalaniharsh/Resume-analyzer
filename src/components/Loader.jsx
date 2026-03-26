import React from 'react'

const Loader = () => {
  return (
    <div className='flex flex-col items-center mt-6'>
        <div className='w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
        <p className='mt-2 text-sm text-gray-600'>Analyzing resume...</p>
    </div>
  )
}

export default Loader