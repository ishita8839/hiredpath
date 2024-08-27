import React from 'react'
import { Badge } from './ui/badge'

function LatestJobCards() {
  return (
    <div className='p-5 rounded-xl shadow-lg bg-white border-gray-200 cursor-pointer'>
        <div>
        <h1 className='font-medium text-lg'>Company Name</h1>
        <p className='text-sm text-gray-500'>India</p> 
        </div>  
        <div>
            <h1 className='font-semibold text-lg my-2'>Job Title</h1>
            <p className='text-sm text-gray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, magni?</p>
        </div> 
        <div className='flex items-center gap-2 mt-4'>
            <Badge className={'text-blue-600 font-bold'} variant='ghost'>12 Positions</Badge>
            <Badge className={'text-red-400 font-bold'} variant='ghost'>Part Time</Badge>
            <Badge className={'text-blue-300 font-bold'} variant='ghost'>24LPA</Badge>
            </div>  
              
    </div>
    
  )
}

export default LatestJobCards