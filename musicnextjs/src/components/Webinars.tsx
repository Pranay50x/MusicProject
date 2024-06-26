import Link from 'next/link'
import React from 'react'
import { HoverEffect } from './ui/card-hover-effect';
import { title } from 'process';
import { HoveredLink } from './ui/navbar-menu';

const featuredWebinars = [
    {
      title: 'Understanding Music Theory',
      description:
        'Dive deep into the fundamentals of music theory and enhance your musical skills.',
      slug: 'understanding-music-theory',
      isFeatured: true,
    },
    {
      title: 'The Art of Songwriting',
      description:
        'Learn the craft of songwriting from experienced musicians and songwriters.',
      slug: 'the-art-of-songwriting',
      isFeatured: true,
    },
    {
      title: 'Mastering Your Instrument',
      description:
        'Advanced techniques to master your musical instrument of choice.',
      slug: 'mastering-your-instrument',
      isFeatured: true,
    },
    {
      title: 'Music Production Essentials',
      description:
        'Get started with music production with this comprehensive overview.',
      slug: 'music-production-essentials',
      isFeatured: true,
    },
    // Added two more webinars
    {
      title: 'Live Performance Techniques',
      description:
        'Enhance your live performance skills with expert tips and strategies.',
      slug: 'live-performance-techniques',
      isFeatured: true,
    },
    {
      title: 'Digital Music Marketing',
      description:
        'Learn how to promote your music effectively in the digital age.',
      slug: 'digital-music-marketing',
      isFeatured: true,
    },
  ];


function Webinars() {
  return (
    <div className='p-12 bg-gray-900'>
        
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
                <h2 className='text-base font-semibold text-teal-300 tracking-wide uppercase'>Featured Webinars</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>Enhance your Music Journey</p>
            </div>
            <div className='mt-10'>
                <HoverEffect items={featuredWebinars.map(webinar => (
                    {
                        title: webinar.title,
                        link: '/',
                        description: webinar.description
                    } 

                ))}>

                </HoverEffect>
            </div>
            <div className='mt-10 text-center'>
                <Link href={'/'}className='px-5 py-4 rounded-border border-neutral-600 text-neutral-700 bg-white hover:bg-grey-100 transition duration-200 mt-3' 
                                style={{borderTopLeftRadius: '50px', borderTopRightRadius: '50px', borderBottomLeftRadius: '50px', borderBottomRightRadius: '50px'}}>
                    View all
                </Link>
            </div>
        </div>
    
    </div>
  )
}

export default Webinars