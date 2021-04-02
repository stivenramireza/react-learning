import React, { Fragment, useState } from 'react';

const Form = () => {

    const [data, setData] = useState({
        name: '',
        lastName: ''
    })

    const handleInputChange = (event) => {
        // console.log(event.target.value)
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const sendData = (event) => {
        event.preventDefault();
        console.log(data.name + ' ' +  data.lastName);
    }

    return (  
        <Fragment>
            <h1>Form</h1>
            <form className="row" onSubmit={sendData}>
                <div className="col-md-3">
                    <input 
                        placeholder="Enter name"
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                        placeholder="Enter last name"
                        className="form-control"
                        type="text"
                        name="lastName"
                        onChange={handleInputChange}
                    />
                </div>
                <div className="col-md-3">
                    <button 
                        className="btn btn-primary"
                        type="submit"
                    >
                        Send
                    </button>
                </div>
            </form>
            <h3>{data.name} - {data.lastName}</h3>
        </Fragment>
    );
}
 
export default Form;