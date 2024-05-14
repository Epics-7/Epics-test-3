/* eslint-disable */
import React from 'react'
import Plant from '../img/about/q.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className='section'>
    <div className='container mx-auto h-full relative'>
      {/* text and img wrapper */}
      <div className='flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
        <div className='sm:pl-3 lg:size-44 flex-1 max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
          <img src={Plant}></img>
        </div>
        {/* text */}
        <div className='sm:pt-3 lg:mt-2 flex-1 pt-36 pb-0 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
          <h1 className='h1 lg:pt-2.5'>About</h1>
          <p>By <span>analyzing images</span> of plants, a computer vision model can identify crop diseases and pests, triggering alerts to farmers to enable timely intervention. This technology, coupled with land use analysis, can provide valuable insights into crop patterns, land management practices, and potential environmental impacts.<br/>
           Combining these approaches allows for a more comprehensive understanding of agricultural practices and their effects on both the environment and crop health. This integrated system can empower farmers to make informed decisions about their land, ultimately promoting sustainable agriculture and food security.</p>
        </div>
      </div>
    </div> 
    </section>
  )
}

export default About
/* eslint-enable */

