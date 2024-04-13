import Link from 'next/link'
import React from 'react'

function Webinars() {
  return (
    <div className='p-12 bg-gray-900'>
        
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base font-semibold text-teal-300 tracking-wide uppercase'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your Music Journey</p>
            </div>
            <div className='mt-10'>ga</div>
            <div className='mt-10 text-center'>
                <Link href={'/'} className='px-3 py-2 rounded-border border-neutral-600 text-neutral-700 bg-white hover:bg-grey-100 transition duration-200 '>
                    View all
                </Link>
            </div>
        </div>
    
    </div>
  )
}

export default Webinars