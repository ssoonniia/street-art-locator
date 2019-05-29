import React, {Component} from 'react';
import {connect} from 'react-redux';
import Comments from '../components/Comments/Comments'; 
import {createComment} from '../actions/userActions'

class CommentsContainer extends Component {

    state ={
        author: '',
        comment: ''
    }

    handleAuthorOnChange = ( event ) => {
        this.setState({ author: event.target.value })
    }

    handleCommentOnChange = ( event ) => {
        this.setState({ comment: event.target.value })
    }
    handleOnSubmit = ( event ) => {
        this.props.createComment(this.state.author, this.state.comment)
        event.preventDefault()
        this.setState({
          author: '',
          comment: ''  
        })
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleOnSubmit}>
                <label>By:</label>
                <input
                    type="text"
                    name="author"
                    onChange={this.handleAuthorOnChange} 
                    value={this.state.author} 
                />
                <label>Comment </label>
                <textarea
                    type="textarea"
                    name="comment"
                    onChange={this.handleCommentOnChange}
                    value={this.state.comment}
                />
                <input type="submit" value="Submit" />
            </form>
            <Comments comments={this.props.comments} />
        </div>
        )
    }

}

function mapStateToProps(state){
    return { comments: state.comments }
}
  
export default connect(mapStateToProps, {createComment})(CommentsContainer);
