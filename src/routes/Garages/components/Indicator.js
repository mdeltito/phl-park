import React, { Component, PropTypes } from 'react'
import './Indicator.scss'
import LoadingIcon from './hourglass.svg'

class Indicator extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    lastUpdate: PropTypes.object
  }

  render () {
    const { isLoading, lastUpdate } = this.props
    const Icon = isLoading ? <img src={LoadingIcon} /> : ''
    const labelText = 'Last Update: ' + (lastUpdate ? lastUpdate.toTimeString() : 'Never')

    return (
      <div className='indicator'>
        <small>{labelText}</small>
        {Icon}
      </div>
    )
  }
}

export default Indicator
