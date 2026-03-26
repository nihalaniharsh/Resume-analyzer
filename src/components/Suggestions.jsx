import React from 'react'

const Suggestions = ({suggestions}) => {  //pass suggestion as a prop (array)
  return (
    <div className='bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg'>
        <h3 className='mb-3 text-lg font-semibold text-gray-700 '>
            Suggestions
        </h3>

        <ul className='space-y-3'>
            {suggestions.map((item, index) => (
                <li key={index}
                className='bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition'
                
                >
                    
                    {item}

                </li>
            ))}

        </ul>
    </div>
  )
}

export default Suggestions