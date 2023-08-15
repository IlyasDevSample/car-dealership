import React from 'react'

const About = () => {
  return (
    <div
      className='container mx-auto px-4 md:px-6 py-12'
    >
      <div className=''>
        <h3 className='text-light-dark-fg-primary md:pl-2 text-[40px] mb-8 leading-normal font-lexend not-italic font-medium'>Mobiling Social</h3>
        <div
          className='py-[30px] px-8 h-[400px] w-full rounded-[31px] bg-gradient'
        >
          <div
            className='h-full w-full border border-white-fg-secondary border-dashed text-white-fg-secondary'
          >
            <h4>
              Information on data processing
            </h4>
            <p>
              On our website we provide content from Storystream. To view this content, you must agree to the data processing by Storystream.
            </p>
            <div>
              <button>Agree</button>
              <button>Information on data privacy</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About