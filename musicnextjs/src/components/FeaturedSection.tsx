import React from 'react'
import content from '../data/music_courses.json'
import Link from 'next/link'

function FeaturedSection() {
  return (
    <div className='py-12 bg-gray-900'>
       <div className='text-center'>
            <h2 className='text-base font-semibold text-teal-300 tracking-wide uppercase'>Featured Courses</h2>
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Learn with the Best</p>
       </div>
       <div>
        
       </div>
       <div className='mt-20 text-center'>
                <Link href={'/courses'}
                 className='px-4 py-2 rounded-border border-neutral-600 text-neutral-700 bg-white hover:bg-grey-100 transition duration-200  '>
                    View all Courses
                </Link>
       </div>
    </div>
  )
}

export default FeaturedSection
