import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import Garages from './Garages'

export const createRoutes = (store) => ({
  path        : '/',
  component   : CoreLayout,
  indexRoute  : Garages(store),
  childRoutes : []
})

export default createRoutes
