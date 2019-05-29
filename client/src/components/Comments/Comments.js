import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comment from './Comment'


const Comments = props => {
    return(
        <div>
            { props.comments.map((comment) => {
                return <Comment key={ comment.id } author={comment.author} comment={comment.comment} />

                })
            }

        </div>    
    )

}
export default Comments