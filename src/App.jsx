import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'

const App = () => {
  return (
    <div
      className=''
    >
      <header
        className='bg-white-fg-primary relative'
      >
        <Navbar />
        <Main />
      </header>
      <section className='bg-white-fg-secondary'>
        <About />
      </section>
    </div>
  )
}

export default App
