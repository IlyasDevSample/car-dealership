import React from 'react'
import { RiSearchLine } from 'react-icons/ri'

const Main = () => {
  return (
    <div
      className='min-h-screen 2xl:min-h-[calc(100vh-125px)] flex flex-col justify-between items-start container mx-auto px-4 md:px-6'
    >
      <div>
        <h2>
          best car for your performance
        </h2>
        <p>
          We will serve you to get dream car here easily and quickly that is reliable
        </p>
        <div>
          <input type="text" />
          <button>
            <RiSearchLine />
          </button>
        </div>

        <div>

        </div>
      </div>

      <div>
        <h3>
          BMW series 3 bLUE
        </h3>

        <div>
          <div>
            <small>base price</small>
            <p>$ 41.87k</p>
          </div>
          <div>
            <small>power</small>
            <p>365 HP</p>
          </div>
          <div>
            <small>engine</small>
            <p>362 V6</p>
          </div>
        </div>

        <div>
        </div>
      </div>
    </div>
  )
}

export default Main