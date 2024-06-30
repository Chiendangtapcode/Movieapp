import React, { useRef } from 'react'
import Card from '../components/Card'

const HorizontalScrollCard = ({data =[], heading,trending,media_type}) => {
    const containerRef = useRef()
    const handleNext = ()=>{
        containerRef.current.scrollLeft += 300
    }
    const handlePrev = ()=>{
        containerRef.current.scrollLeft -= 300
    }
  return (
    <div className='container mx-auto px-3 my-10'>
        <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>
        <div className='relative'>
          <div ref={containerRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'>
            {
              data.map((data, index) => {
                return (
                  <Card key={data.id+'heading'+index} data={data} index={index + 1} trending={trending} media_type={media_type} />
                )
              })
            }
          </div>
          <div className='absolute hidden lg:flex top-0 w-full h-full justify-between items-center'>
            <button onClick={handlePrev} className='text-white p-1 text-xl z-10'>
              <i className="fa-solid fa-chevron-left"></i>
            </button>
            <button onClick={handleNext} className='text-white p-1 text-xl z-10'>
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
  )
}

export default HorizontalScrollCard