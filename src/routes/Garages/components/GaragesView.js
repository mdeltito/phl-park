import React, { Component, PropTypes } from 'react'
import { Chart, Doughnut } from 'react-chartjs-2'
import { getGarageChartOpts, getGarageChartData, FETCH_INTERVAL } from '../modules/parking'
import Indicator from './Indicator'
import './GaragesView.scss'

class GaragesView extends Component {
  static propTypes = {
    garages: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  constructor (props) {
    super(props)

    Chart.pluginService.register({
      beforeDraw: (chart) => {
        let width = chart.chart.width
        let height = chart.chart.height
        let ctx = chart.chart.ctx
        let type = chart.config.type

        if (type === 'doughnut') {
          let oldFill = ctx.fillStyle
          let fontSize = ((height - chart.chartArea.top) / 100).toFixed(2)

          ctx.restore()
          ctx.font = fontSize + 'em sans-serif'
          ctx.textBaseline = 'middle'

          let text = chart.config.options.centerLabel
          let textX = Math.round((width - ctx.measureText(text).width) / 2)
          let textY = (height + chart.chartArea.top) / 2

          ctx.fillStyle = '#FFFFFF'
          ctx.fillText(text, textX, textY)
          ctx.fillStyle = oldFill
          ctx.save()
        }
      }
    })
  }

  componentWillMount () {
    let startFetch = () => {
      this.props.fetch()
      setTimeout(startFetch, FETCH_INTERVAL)
    }
    startFetch()
  }

  render () {
    const { garages } = this.props

    return (
      <div className='row'>
        <Indicator {...this.props} />
        {garages.map((g, idx) => {
          return (
            <div className='garage col-md-4' key={g.display_name} id={idx}>
              <h2 className='tag tag-default'>{g.display_name}</h2>
              <Doughnut data={getGarageChartData(g)} options={getGarageChartOpts(g)} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default GaragesView
