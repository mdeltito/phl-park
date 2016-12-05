// Actions
export const FETCH_INTERVAL = 1000 * 60 * 5
export const FETCH_PARKING_DATA = 'FETCH_PARKING_DATA'
export function fetchParkingData () {
  return (dispatch) => {
    dispatch(requestParkingData())

    return fetch('https://api.phila.gov/airport-parking/v1')
      .then(response => response.json())
      .then(json => dispatch(receiveParkingData(json)))
  }
}

export const REQUEST_PARKING_DATA = 'REQUEST_PARKING_DATA'
export function requestParkingData (json) {
  return {
    type: REQUEST_PARKING_DATA
  }
}

export const RECEIVE_PARKING_DATA = 'RECEIVE_PARKING_DATA'
export function receiveParkingData (json) {
  return {
    type: RECEIVE_PARKING_DATA,
    payload: json
  }
}

export const actions = {
  requestParkingData,
  receiveParkingData,
  fetchParkingData
}

// Reducers
const initialState = {
  garages: [],
  isLoading: false,
  lastUpdate: null
}

export default function parkingReducer (state = initialState, action) {
  switch (action.type) {
    case 'REQUEST_PARKING_DATA':
      return {
        ...state,
        isLoading: true
      }

    case 'RECEIVE_PARKING_DATA':
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        lastUpdate: new Date()
      }

    default:
      return state
  }
}

// Transforms
export function getGarageChartOpts (garage) {
  return {
    legend: {
      display: false,
      labels: {
        fontColor: '#FFF'
      }
    },
    centerLabel: Math.round((garage.spaces_available / garage.total_spaces) * 100) + '%'
  }
}

export function getGarageChartData (garage) {
  let data = {
    labels: ['Available', 'Occupied', 'Accessible'],
    datasets: [{
      data: [
        parseInt(garage.spaces_available),
        parseInt(garage.total_spaces - garage.spaces_available - garage.ada_spaces),
        parseInt(garage.ada_spaces)
      ],
      backgroundColor: [
        '#00735A',
        '#732100',
        '#FFCE56'
      ],
      hoverBackgroundColor: [
        '#333',
        '#333',
        '#333'
      ]
    }]
  }

  return data
}
