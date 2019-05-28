import React, {Component} from 'react';
import {connect} from 'react-redux';

class CommentsContainer extends Component {

    state ={
        author: '',
        comment: ''
    }

    handleAuthorOnChange = ( event ) => {
        this.setState({ author: event.target.value })
    }

    handleCommentOnChange = ( event ) => {
        this.setState({ comment: event.targe.value })
    }
}