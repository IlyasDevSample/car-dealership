import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

const App = () => {
  return (
    <div
      className='min-h-[15000px]'
    >
      <header
        className='bg-white-fg-primary relative'
      >
        <Navbar />
        <Main />
      </header>
    </div>
  )
}

export default App
