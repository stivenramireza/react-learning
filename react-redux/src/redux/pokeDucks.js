import axios from 'axios'

// constants
const initialData = {
    pokes: []
}

// types
const GET_POKES_SUCCESS = 'GET_POKES_SUCCESS'

// reducers
export const pokeReducer = (state = initialData, action) => {
    switch(action.type) {
        case GET_POKES_SUCCESS:
            return {...state, pokes: action.payload}
        default:
            return state
    }
}

// actions
export const getPokesAction = () => async(dispatch, getState) => {
    try {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=200'
        const { data } = await axios.get(url)
        dispatch({
            type: GET_POKES_SUCCESS,
            payload: data.results
        })
    } catch (err) {
        console.error(`Error to get pokes: ${err}`)
    }
}