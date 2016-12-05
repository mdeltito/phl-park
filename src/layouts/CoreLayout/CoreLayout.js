import React from 'react'
import { Header, Legend } from '../../components/Header'
import { Footer } from '../../components/Footer'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container-fluid'>
    <Header />
    <Legend />
    <div className='core-layout__viewport'>
      {children}
    </div>
    <Footer />
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
