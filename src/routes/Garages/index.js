import { injectReducer } from '../../store/reducers'

export default (store) => {
  const GaragesContainer = require('./containers/GaragesContainer').default
  const reducer = require('./modules/parking').default
  injectReducer(store, { key: 'parking', reducer })

  return {
    component: GaragesContainer
  }
}
