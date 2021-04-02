import React, { useState, Fragment } from 'react';

const List = () => {

    const [arrayNumber, setArrayNumber] = useState([1, 2, 3, 4, 5]);

    const addElement = () => {
        setArrayNumber([...arrayNumber, arrayNumber.pop() + 1]);
    }

    return (  
        <Fragment>
            <h2>List</h2>
            <button onClick={addElement}>Add</button>
            {
                arrayNumber.map((item, index) => 
                    <p key={index}>{item} - {index}</p>
                )
            }
        </Fragment>
    );
}
 
export default List;