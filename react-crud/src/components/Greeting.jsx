import React, { Fragment } from 'react'

const Greeting = (props) => {
    return (  
        <Fragment>
            <h2>Hello {props.person}</h2>
        </Fragment>
    );
}
 
export default Greeting;