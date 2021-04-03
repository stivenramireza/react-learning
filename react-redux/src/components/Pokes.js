import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { getPokesAction, getNextPokesAction } from '../redux/pokeDucks';

const Pokes = () => {

    const dispatch = useDispatch()
    const pokes = useSelector(store => store.pokes.pokes)

    return (
        <div>
            <h1>Pokes List</h1>
            <button onClick={() => dispatch(getPokesAction())}>Get pokes</button>
            <button onClick={() => dispatch(getNextPokesAction(20))}>Next</button>
            <ul>
                {
                    pokes.map((item, index) => (
                        <li key={index}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokes;