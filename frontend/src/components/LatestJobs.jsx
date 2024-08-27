import React from 'react'
import LatestJobCards from './LatestJobCards';

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function LatestJobs() {
  return (
    <div className='max-w-7xl mx-auto my-20'>
        
        <h1 className='text-3xl font-bold'>
          <span className='text-gray-900'>Leading Job Opportunities </span>
          <span className='text-blue-600'>:-</span>
        </h1>
        
        <div className='grid grid-cols-3 gap-4 my-5'>
          {randomJobs.slice(0, 9).map((item, index) => (
            <LatestJobCards key={index} />
          ))}
        </div>
        <div className="relative isolate px-6 lg:px-8">
     
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      </div>
      </div>
  );
}

export default LatestJobs;
