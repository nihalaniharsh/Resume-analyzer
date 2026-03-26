// Progress bar score component
import React from 'react'

const ScoreCard = ({score}) => {

    const getColor = () =>{
        if(score > 75 ) return "bg-green-500";
        if(score > 50) return "bg-yellow-500";
        return "bg-red-500";
    }

  return (
    <div className='bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg'>
        <h2 className='text-xl font-semibold mb-4 text-gray-700'>
            Resume score
        </h2>

        <div className='w-full bg-gray-200 rounded-full h-4 overflow-hidden'>
            <div className={`${getColor()} h-4 transition-all duration-1000`}
             style={{width: `${score}%`}}
            />
        </div>

        <p className='text-center mt-4 text-2xl font-bold'>
            {score}/100

        </p>
    </div>
  )
}

export default ScoreCard