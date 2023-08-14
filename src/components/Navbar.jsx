import { useEffect, useState } from 'react'
import logo from '../img/brand-logo.svg'
import { RiArrowDownSFill } from 'react-icons/ri'
import { useWindowSize } from "@uidotdev/usehooks"
import { GrClose } from 'react-icons/gr'
import { GiHamburgerMenu } from 'react-icons/gi'


const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const { width } = useWindowSize();

  useEffect(() => {
    if (width > 1024) {
      setIsNavOpen(false)
    }
  }, [width])

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

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 ${isNavOpen ? "flex" : "hidden"} justify-start items-start bg-white-fg-primary lg:static lg:bg-transparent lg:flex lg:justify-between lg:items-center lg:gap-0`}
      >
        <div
          className='lg:hidden absolute top-[32px] right-0 p-5'
        >
          <GrClose className='text-2xl text-gray-fg-primary cursor-pointer ' onClick={() => setIsNavOpen((prev) => !prev)} />
        </div>
        <ul className='flex items-center gap-5 flex-col lg:flex-row pl-16 pt-20 lg:pl-0 lg:pt-0 lg:gap-1'>
          <li className='nav-link nav-link-active'>
            <a href="/">home</a>
          </li>
          <li className='nav-link'>
            <a href="/">
              service
              <RiArrowDownSFill className='inline-block w-4 h-4 flex-shrink-0 ml-1' />
            </a>
          </li>
          <li className='nav-link'>
            <a href="/">
              product
              <RiArrowDownSFill className='inline-block w-4 h-4 flex-shrink-0 ml-1' />
            </a>
          </li>
          <li className='nav-link'><a href="/">testimonial</a></li>
        </ul>
      </div>

      <div
        className='lg:flex justify-center items-center py-3 px-10 gap-2 bg-blue-fg-primary rounded-[10px] border-solid border border-gray-fg-secondary hidden'
      >
        <button
          className='text-white text-lg not-italic font-normal capitalize font-lexend leading-normal'
        >
          sign in
        </button>
      </div>
      <div
        className='lg:hidden'
      >
        <GiHamburgerMenu className='text-2xl text-blue-fg-primary cursor-pointer' onClick={() => setIsNavOpen((prev) => !prev)} />
      </div>
    </nav>
  )
}

export default Navbar