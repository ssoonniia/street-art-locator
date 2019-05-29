import React, {Component} from 'react';
import {connect} from 'react-redux';

const Comment = (props) => {
    return(
        <div>
           {props.author} says {props.comment} 
        </div>
    )
}
export default Comment;