import React, { Fragment } from 'react';

const Jsx = () => {

    // const greeting = 'Hello JSX'
    const temperature = 21

    return (  
        // <h2>I'm a component {greeting}</h2>
        <Fragment>
            <h2>Cold or hot?</h2>
            <h4>
                { temperature > 20 ? 'hot' : 'cold'}
            </h4>
        </Fragment>
    );
}
 
export default Jsx;