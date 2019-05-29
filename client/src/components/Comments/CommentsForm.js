import React from 'react'; 

const CommentForm = props => {
    return (
        <form>
            <label>By:</label>
            <input
                type="text"
                name="author"
                value={ props.authorValue }
                onChange={ props.handleAuthorChange }   
            />
            <label>Comment </label>
                <textarea
                    type="textarea"
                    name="comment"
                    value={ props.commentValue }
                    onChange={props.handleAuthorChange}
                />
            
        </form>
    )
}
export default CommentForm;