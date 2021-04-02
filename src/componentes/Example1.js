import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const Example1 = () => {

    const { register, errors, handleSubmit } = useForm();

    const [info, setInfo] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data)
        setInfo([...info, data])
        e.target.reset();
    }

    return (
        <Fragment>
            <h1>Example #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="title"
                    placeholder="Enter title"
                    className="form-contro my-2"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'Required field'
                            },
                            minLength: {
                                value: 2,
                                message: 'Min 2 letters'
                            }
                        })
                    }
                >
                </input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.title?.message}
                </span>
                <input
                    name="description"
                    placeholder="Enter description"
                    className="form-contro my-2"
                    ref={
                        register({
                            required: {
                                value: true,
                                message: 'Required field'
                            }
                        })
                    }
                >
                </input>
                <span className="text-danger text-small d-block mb-2">
                    {errors?.description?.message}
                </span>
                <button className="btn btn-primary">Add</button>
            </form>
            <ul>
                {
                    info.map((item, index) => 
                        <li key={index}>{item.title} - {item.description}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default Example1;