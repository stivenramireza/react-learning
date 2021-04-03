import React, { Fragment } from 'react'
import Avatar from './Avatar'

const Comment = ({person}) => {
    return (  
        <Fragment>
            <h1>Comments</h1>
            <div className="media">
                <Avatar urlImage={person.urlImage} />
                <div className="media-body">
                    <h5 className="mt-0">{person.name}</h5>
                    {person.text}
                </div>
            </div>
        </Fragment>
    );
}
 
export default Comment;