import axios from 'axios'

// constants
const initialData = {
    pokes: [],
    offset: 0
}

// types
const GET_POKES_SUCCESS = 'GET_POKES_SUCCESS'
const GET_NEXT_POKES_SUCCESS = 'GET_NEXT_POKES_SUCCESS'

// reducers
export default function pokeReducer (state = initialData, action) {
    switch(action.type) {
        case GET_POKES_SUCCESS:
            return {...state, pokes: action.payload}
        case GET_NEXT_POKES_SUCCESS:
            return {...state, pokes: action.payload.pokes, offset: action.payload.offset}
        default:
            return state
    }
}

// actions
export const getPokesAction = () => async(dispatch, getState) => {

    const { offset } = getState().pokes

    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`
        const { data } = await axios.get(url)
        dispatch({
            type: GET_POKES_SUCCESS,
            payload: data.results
        })
    } catch (err) {
        console.error(`Error to get pokes: ${err}`)
    }
}

export const getNextPokesAction = (numberOffset) => async(dispatch, getState) => {

    const { offset } = getState().pokes
    const nextOffset = offset + numberOffset

    try {
        const url = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${nextOffset}`
        const { data } = await axios.get(url)
        dispatch({
            type: GET_NEXT_POKES_SUCCESS,
            payload: {
                pokes: data.results,
                offset: nextOffset
            }
        })
    } catch (err) {
        console.error(`Error to get next pokes: ${err}`)
    }
}