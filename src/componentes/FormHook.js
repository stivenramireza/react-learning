import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }

    return (  
        <Fragment>
            <h1>Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    name="title" 
                    className="form-control my-2"
                    placeholder="Title"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'Title is required'
                            },
                            maxLength: {
                                value: 5,
                                message: 'Max 5 characters'
                            },
                            minLength: {
                                value: 2,
                                message: 'Min 2 characters'
                            }
                        })
                    }
                />
                <span className="text-danger text-small d-block mb-2">
                    { errors?.title?.message }
                </span>
                <button className="btn btn-primary">Send</button>
            </form>
        </Fragment>
    );
}
 
export default FormHook;