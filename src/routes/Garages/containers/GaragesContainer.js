import { connect } from 'react-redux'
import { fetchParkingData } from '../modules/parking'

import GaragesView from '../components/GaragesView'

const mapStateToProps = (state) => {
  return state.parking
}

const mapDispatchToProps = {
  fetch: fetchParkingData
}

export default connect(mapStateToProps, mapDispatchToProps)(GaragesView)
