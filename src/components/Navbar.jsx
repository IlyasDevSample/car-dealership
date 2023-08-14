import React from 'react'
import logo from '../img/brand-logo.svg'
import { RiArrowDownSFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <nav
      className='flex justify-between items-center container mx-auto px-4 py-9'
    >
      <a
        className='flex items-center gap-3'
        href='/'
      >
        <figure>
          <img src={logo} alt="car dealership" className='w-8 h-8 flex-shrink-0' />
        </figure>
        <div>
          <h1
            className='text-blue-fg-primary text-xl not-italic font-medium capitalize font-lexend leading-normal'
          >
            mobiling
          </h1>
          <p
            className='text-gray-fg-primary text-xs not-italic font-light capitalize font-lexend leading-normal'
          >
            automobile
          </p>
        </div>
      </a>

      <div>
        <ul className='flex items-center gap-1'>
          <li className='nav-link nav-link-active'>
            <a href="/">home</a>
          </li>
          <li className='nav-link'>
            <a href="/">
              service
              <RiArrowDownSFill className='inline-block w-4 h-4 flex-shrink-0' />
            </a>
          </li>
          <li className='nav-link'>
            <a href="/">
              product
              <RiArrowDownSFill className='inline-block w-4 h-4 flex-shrink-0' />
            </a>
          </li>
          <li className='nav-link'><a href="/">testimonial</a></li>
        </ul>
      </div>

      <div>
        login
      </div>
    </nav>
  )
}

export default Navbar