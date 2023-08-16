import car from '../img/car.svg'
import circle from '../img/circle.png'
import star from '../img/star.png'
import { RiSearchLine } from 'react-icons/ri'

const Main = () => {
  return (
    <div
      className='min-h-screen 2xl:min-h-[calc(100vh-125px)] flex flex-col justify-between items-start container mx-auto px-4 md:px-6 py-12'
    >
      <div div
        className='relative mb-8'
      >
        <h2 className='text-light-dark-fg-primary font-lexend text-[40px] md:text-[48px] lg:text-[72px] 2xl:text-[80px] not-italic font-semibold max-w-[719px] capitalize z-[1] relative leading-snug 2xl:leading-normal'>
          best car for your performance
        </h2>
        <p className='text-gray-fg-primary z-[1] text-lg md:text-xl 2xl:text-2xl not-italic font-normal font-lexend leading-normal 2xl:max-w-[660px] max-w-[560px] mt-5 2xl:mt-6 md:pl-2 relative'>
          We will serve you to get dream car here easily and quickly that is reliable
        </p>
        <div
          className='flex items-center mt-5 2xl:mt-6 max-w-[459px] md:pl-2 md:w-[459px]'
        >
          <input type="text" className='z-[1] py-[8px] pl-[32px] w-[300px] sm:w-[344px] rounded-l-[10px] border border-gray-fg-secondary outline-none' placeholder='Search' />
          <button
            className='z-[1] p-3 bg-blue-fg-primary rounded-r-[10px] text-white-fg-primary'
          >
            <RiSearchLine />
          </button>
        </div>

        <div
          className='w-[292px] h-[292px] md:w-[392px] md:h-[392px] flex-shrink-0 rounded-full bg-blue-fg-primary bg-opacity-20 blur-[200px] absolute md:top-[35px] top-3 left-[10px] md:left-[100px]'

        >
        </div>
      </div >

      

      <div
        className='w-full h-[200px] md:w-[300px] md:h-full flex-shrink-0 md:bg-blue-fg-primary md:bg-opacity-[0.07] md:absolute md:bottom-0 md:top-0 transform lg:translate-x-[-80%] lg:left-[80%] md:translate-x-[-95%] md:left-[95%]'
      >
        <div className='absolute left-[40%] translate-x-[-40%] bottom-[10%] transform  md:w-[300px] md:h-[500px] lg:w-[600px] lg:h-[500px] bg-no-repeat bg-center bg-contain 2xl:bottom-[15%] w-[300px] h-full' style={{ backgroundImage: `url(${car})` }}>
          <div
            className='hidden md:block absolute left-[45%] translate-x-[-45%] top-[40px] transform'
          >
            <img src={circle} alt="text" />
            <div
              className='absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] transform'
            >
              <img src={star} alt="text" />
            </div>
          </div>


        </div>
        <div
          className='flex-row gap-10 absolute bottom-[146px] lg:bottom-[48px] left-[50%] translate-x-[-50%] 2xl:bottom-[80px] hidden md:flex'
        >
          <div className='w-8 h-8 flex-shrink-0 cursor-pointer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g clip-path="url(#clip0_6_393)">
                <path d="M14.4 16L18.0832 11.9904C18.2339 11.8372 18.3183 11.6309 18.3183 11.416C18.3183 11.2011 18.2339 10.9948 18.0832 10.8416C18.0088 10.7666 17.9203 10.7071 17.8229 10.6665C17.7254 10.6259 17.6208 10.605 17.5152 10.605C17.4096 10.605 17.305 10.6259 17.2075 10.6665C17.1101 10.7071 17.0216 10.7666 16.9472 10.8416L12.456 15.424C12.305 15.5768 12.2204 15.7829 12.2204 15.9976C12.2204 16.2124 12.305 16.4185 12.456 16.5712L16.9472 21.1536C17.0214 21.229 17.1098 21.2888 17.2073 21.3297C17.3048 21.3706 17.4095 21.3916 17.5152 21.3916C17.6209 21.3916 17.7256 21.3706 17.8231 21.3297C17.9206 21.2888 18.009 21.229 18.0832 21.1536C18.2342 21.0009 18.3188 20.7948 18.3188 20.58C18.3188 20.3653 18.2342 20.1592 18.0832 20.0064L14.4 16ZM16 0.640015C13.9829 0.640015 11.9855 1.03731 10.122 1.80923C8.25842 2.58114 6.56515 3.71255 5.13884 5.13885C3.71253 6.56516 2.58112 8.25844 1.80921 10.122C1.0373 11.9856 0.639999 13.9829 0.639999 16C0.639999 24.4848 7.5168 31.36 16 31.36C24.4832 31.36 31.36 24.4848 31.36 16C31.36 11.9263 29.7417 8.01941 26.8612 5.13885C23.9806 2.2583 20.0737 0.640015 16 0.640015ZM16 29.3664C12.4548 29.3664 9.0548 27.9581 6.54796 25.4513C4.04113 22.9444 2.6328 19.5444 2.6328 15.9992C2.6328 12.454 4.04113 9.05401 6.54796 6.54718C9.0548 4.04034 12.4548 2.63201 16 2.63201C19.5452 2.63201 22.9452 4.04034 25.452 6.54718C27.9589 9.05401 29.3672 12.454 29.3672 15.9992C29.3672 19.5444 27.9589 22.9444 25.452 25.4513C22.9452 27.9581 19.5452 29.3664 16 29.3664Z" fill="#98A2B3" />
              </g>
              <defs>
                <clipPath id="clip0_6_393">
                  <rect width="32" height="32" fill="white" transform="matrix(-1 0 0 1 32 0)" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className='w-8 h-8 flex-shrink-0 cursor-pointer'
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
              <g clip-path="url(#clip0_6_391)">
                <path d="M17.6 16L13.9168 11.9904C13.7661 11.8372 13.6817 11.6309 13.6817 11.416C13.6817 11.2011 13.7661 10.9948 13.9168 10.8416C13.9912 10.7666 14.0797 10.7071 14.1772 10.6665C14.2746 10.6259 14.3792 10.605 14.4848 10.605C14.5904 10.605 14.695 10.6259 14.7925 10.6665C14.89 10.7071 14.9784 10.7666 15.0528 10.8416L19.544 15.424C19.695 15.5768 19.7796 15.7829 19.7796 15.9976C19.7796 16.2124 19.695 16.4185 19.544 16.5712L15.0528 21.1536C14.9787 21.229 14.8903 21.2888 14.7927 21.3297C14.6952 21.3706 14.5905 21.3916 14.4848 21.3916C14.3791 21.3916 14.2744 21.3706 14.1769 21.3297C14.0794 21.2888 13.991 21.229 13.9168 21.1536C13.7659 21.0009 13.6812 20.7948 13.6812 20.58C13.6812 20.3653 13.7659 20.1592 13.9168 20.0064L17.6 16ZM16 0.640015C18.0171 0.640015 20.0145 1.03731 21.878 1.80923C23.7416 2.58114 25.4349 3.71255 26.8612 5.13885C28.2875 6.56516 29.4189 8.25844 30.1908 10.122C30.9627 11.9856 31.36 13.9829 31.36 16C31.36 24.4848 24.4832 31.36 16 31.36C7.51682 31.36 0.640015 24.4848 0.640015 16C0.640015 11.9263 2.2583 8.01941 5.13885 5.13885C8.01941 2.2583 11.9263 0.640015 16 0.640015ZM16 29.3664C19.5452 29.3664 22.9452 27.9581 25.4521 25.4513C27.9589 22.9444 29.3672 19.5444 29.3672 15.9992C29.3672 12.454 27.9589 9.05401 25.4521 6.54718C22.9452 4.04034 19.5452 2.63201 16 2.63201C12.4548 2.63201 9.05481 4.04034 6.54798 6.54718C4.04114 9.05401 2.63281 12.454 2.63281 15.9992C2.63281 19.5444 4.04114 22.9444 6.54798 25.4513C9.05481 27.9581 12.4548 29.3664 16 29.3664Z" fill="#98A2B3" />
              </g>
              <defs>
                <clipPath id="clip0_6_391">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>

          </div>
        </div>

      </div>

      <div
        className='sm:pl-2 flex flex-col flex-grow justify-center mt-8 md:mt-0'
      >
        <h3 className='text-light-dark-fg-primary text-3xl sm:text-[36px] not-italic font-normal leading-normal font-lexend capitalize'>
          BMW series 3 BLUE
        </h3>

        <div className='flex flex-row mt-4 gap-16'>
          <div>
            <small className='text-gray-fg-primary text-base not-italic font-normal leading-normal font-lexend capitalize'>base price</small>
            <p className='text-dark-gray-fg-primary text-lg sm:text-2xl not-italic font-light font-lexend leading-normal'>$ 41.87k</p>
          </div>
          <div>
            <small className='text-gray-fg-primary text-base not-italic font-normal leading-normal font-lexend capitalize'>power</small>
            <p className='text-dark-gray-fg-primary text-lg sm:text-2xl not-italic font-light font-lexend leading-normal'>365 HP</p>
          </div>
          <div>
            <small className='text-gray-fg-primary text-base not-italic font-normal leading-normal font-lexend capitalize'>engine</small>
            <p className='text-dark-gray-fg-primary text-lg sm:text-2xl not-italic font-light font-lexend leading-normal'>362 V6</p>
          </div>
        </div>

        <div className='h-0 flex-shrink-0 mt-12 relative'>
          <svg className='stroke-current text-gray-fg-primary w-full md:w-[560px]' strokeWidth='1' stroke='#98A2B3'>
            <svg xmlns="http://www.w3.org/2000/svg" width="560" height="2" viewBox="0 0 560 2" fill="none">
              <path d="M0 1H560" stroke="#98A2B3" strokeWidth="0.7" />
            </svg>
          </svg>
          <div
            className='w-2 h-2 flex-shrink-0 border-gray-fg-primary absolute border-[1px] rounded-full right-[-6px] top-[-3px]'
          ></div>
        </div>
      </div>

    </div >
  )
}

export default Main