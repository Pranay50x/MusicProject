'use client'
import React from 'react'
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import Link from "next/link";
import courseData from '@/data/music_courses.json'
function page() {
  return (
    <div className='min-h-screen bg-black py-12 pt-36'>
      <h1 className='text-lg md:text-7xl text-center font-bold mb-8 text-white font-sans'>All Courses ({courseData.courses.length})</h1>
      <div className='flex flex-wrap justify-center'>
        
      </div>
    </div>
  )
}

export default page
