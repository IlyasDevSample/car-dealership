import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Main = () => {
  return (
    <div
      className='min-h-screen 2xl:min-h-[calc(100vh-125px)] flex flex-col justify-between items-start container mx-auto px-4 md:px-6 py-12'
    >
      <div
        className='relative mb-8'
      >
        <h2 className='text-light-dark-fg-primary font-lexend leading-snug 2xl:leading-normal text-7xl 2xl:text-[80px] not-italic font-semibold max-w-[719px] capitalize z-[1] relative'>
          best car for your performance
        </h2>
        <p className='text-gray-fg-primary z-[1] text-xl 2xl:text-2xl not-italic font-normal font-lexend leading-normal 2xl:max-w-[660px] max-w-[560px] mt-5 2xl:mt-6 pl-2 relative'>
          We will serve you to get dream car here easily and quickly that is reliable
        </p>
        <div
          className='flex items-center mt-5 2xl:mt-6 max-w-[459px] pl-2 w-[459px]'
        >
          <input type="text" className='z-[1] py-[8px] pl-[32px] w-[344px] rounded-l-[10px] border border-gray-fg-secondary outline-none' placeholder='Search' />
          <button
            className='z-[1] p-3 bg-blue-fg-primary rounded-r-[10px] text-white-fg-primary'
          >
            <RiSearchLine />
          </button>
        </div>

        <div
          className='w-[392px] h-[392px] flex-shrink-0 rounded-full bg-blue-fg-primary bg-opacity-20 blur-[200px] absolute top-[35px] left-[100px]'

        >
        </div>
      </div>

      <div
        className='pl-2 flex flex-col flex-grow justify-center'
      >
        <h3 className='text-light-dark-fg-primary text-4xl not-italic font-normal leading-normal font-lexend capitalize'>
          BMW series 3 BLUE
        </h3>

        <div className='flex flex-row mt-4 gap-16'>
          <div>
            <small className='text-gray-fg-primary text-base not-italic font-normal leading-normal font-lexend capitalize'>base price</small>
            <p className='text-dark-gray-fg-primary text-2xl not-italic font-light font-lexend leading-normal'>$ 41.87k</p>
          </div>
          <div>
            <small className='text-gray-fg-primary text-base not-italic font-normal leading-normal font-lexend capitalize'>power</small>
            <p className='text-dark-gray-fg-primary text-2xl not-italic font-light font-lexend leading-normal'>365 HP</p>
          </div>
          <div>
            <small className='text-gray-fg-primary text-base not-italic font-normal leading-normal font-lexend capitalize'>engine</small>
            <p className='text-dark-gray-fg-primary text-2xl not-italic font-light font-lexend leading-normal'>362 V6</p>
          </div>
        </div>

        <div className='h-0 flex-shrink-0 mt-12 relative'>
          <svg className='stroke-current text-gray-fg-primary w-[560px]' strokeWidth='1' stroke='#98A2B3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="560" height="2" viewBox="0 0 560 2" fill="none">
              <path d="M0 1H560" stroke="#98A2B3" strokeWidth="0.7" />
            </svg>
          </svg>
          <div
            className='w-2 h-2 flex-shrink-0 border-gray-fg-primary absolute border-[1px] rounded-full right-[-6px] top-[-3px]'
          ></div>
        </div>



      </div>
    </div>
  )
}

export default Main