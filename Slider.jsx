import React, { useState , /*for auto slides*/ useEffect } from 'react'

/*importing images for slidshow*/

import img2 from "../Slider/images/img2.jpg" ;
import img4 from "../Slider/images/img4.jpg" ;
import Two from "../Slider/images/Two.jpg"

/*chevoron is used for icons <>*/
import { BsChevronCompactLeft , BsChevronCompactRight } from 'react-icons/bs';

/*creation of function for slideshow */
function Slider({autoSlide = false , autoSlideInterval = 3000}) {

const images = [Two , img2  , img4 ] ;

/* this part is use to make a <> icons clickable */
const [curr , setCurr] = useState(0) ;

const prev = () => setCurr( (curr) => (curr === 0 ? images.length-1 : curr - 1 ));
const next = () => setCurr( (curr) => (curr ===images.length-1 ? 0 : curr + 1 ));

/* This part is for auto sliding */
useEffect(()=>{
  if(!autoSlide) return
  const slideInterval = setInterval(next , autoSlideInterval);
  return () => clearInterval(slideInterval);
} , [])

  return (
    <>
    <div className='bg-zinc-900 h-screen w-auto overflow-hidden ml-64 '>
      <div className=' rounded-md  ml-96 relative top-[5%] overflow-hidden absolute border-2 w-6/12 h-80 '>
        <div className='h-full w-full flex transition-transform ease-out duration-500 justify-center rounded' 
          style={{transform:`translateX(-${curr * 100}%)`}}>
            {
                images.map(image =>{
                    return( <img src={image} /> )
                })
            }
        </div>

        {/*Left arrow*/}
        <div className='absolute inset-0 flex items-center'>
          <button className='p-1 rounded-full shadow hover:scale-50' onClick={prev}>
            <BsChevronCompactLeft size={40} / >
          </button>
      
        {/*Right arrow*/}
          <button className='p-1 rounded-full shadow hover:scale-50 ml-auto' onClick={next}>
            <BsChevronCompactRight size={40} / >
          </button>
        </div>
        {/* this is a part of .[dot] */}
        <div className='absolute bottom-4 right-0 left-0'>
          <div className='flex item-center justify-center gap-2'>
            {images.map((s,i)=>(
              <div key={i} className={`transiction-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`}></div>
            ))}
        </div>
      </div>
      </div>
    </div>
    <div className=' md-rounded relative bg-zinc-900 text-center text-white '>
        <div className=' flex gap-5 ml-40'>
            <div className='rounded-md p-3 border-2'>MORE</div>
            <div className='rounded-md p-3 border-2'>ACTION</div>
            <div className='rounded-md p-3 border-2'>ROMANTIC</div>
            <div className='rounded-md p-3 border-2'>ANIMATION</div>
            <div className='rounded-md p-3 border-2'>COMEDY</div>
            <div className='rounded-md p-3 border-2'>DRAMA</div>
            <div className='rounded-md p-3 border-2'>HORROR</div>
            <div className='rounded-md p-3 border-2'>WESTERN</div>
        </div>
    </div>
  </>
  )
}

export default Slider