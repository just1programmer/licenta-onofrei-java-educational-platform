import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Content from './components/Content'
import { ScrollToTop } from './components/ScrollToTop'

export default function App() {
  return (
      <React.Fragment>
              <div className='app'>
                    <Header/>
                    <Content/>
                    <ScrollToTop/>
                    <Footer/>
                </div>
                
      </React.Fragment>

  )
}
