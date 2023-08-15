import { RiArrowRightSLine } from 'react-icons/ri'

const About = () => {
  return (
    <div
      className='container mx-auto px-4 md:px-6 py-12'
    >
      <div>
        <h3 className='text-light-dark-fg-primary md:pl-2 text-3xl sm:text-[40px] mb-8 leading-normal font-lexend not-italic font-medium capitalize'>mobiling social</h3>

        <div
          className='py-[30px] px-8 h-[400px] w-full rounded-[31px] bg-gradient'
        >
          <div
            className='h-full w-full border border-white-fg-secondary border-dashed text-white-fg-secondary p-4 flex flex-col justify-end gap-5'
          >
            <h4 className='text-white text-2xl sm:text-3xl not-italic font-medium font-lexend'>
              Information on data processing
            </h4>
            <p className='text-white text-sm sm:text-base not-italic font-normal font-lexend max-w-[665px]'>
              On our website we provide content from Storystream. To view this content, you must agree to the data processing by Storystream.
            </p>
            <div className='flex gap-5'>
              <button className='about-btn'>
                <RiArrowRightSLine className='inline-block' />
                Agree
              </button>
              <button className='about-btn'>
                <RiArrowRightSLine className='inline-block' />
                Information on data privacy
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='mt-12'>
        <div>
          <h3 className='text-light-dark-fg-primary md:pl-2 text-3xl sm:text-[40px] mb-2 leading-normal font-lexend not-italic font-medium capitalize'>
            about us
          </h3>
          <p>
            Find out briefly but informatively
          </p>
          <p>
            As an upscale and exclusive chauffeur and limousine service near Indonesia, we have been ensuring for more than 15 years that you get to your destination on time and safely. We sell in around Indonesia , as well as beyond to destinations throughout World. From the Indonesia to shuttle service, you can look forward to a professional team and comfort of our car service.
          </p>
        </div>
        <div>

        </div>
      </div>

    </div>
  )
}

export default About