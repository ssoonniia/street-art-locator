export function createUser(name, age){
  return(dispatch)=>{
    const body = JSON.stringify({name: name, age: age})
    dispatch({type: 'CREATE_USER'});
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: body
    })
    .then(response => response.json())
    .then(data => dispatch({ type: 'SET_USER', payload: data}))
  }
}

export function createComment(author, comment){
  return(dispatch)=>{
    const body = JSON.stringify({author: author, comment: comment})
  dispatch({type: 'CREATE_COMMENT'});
  fetch('/comments',{
    method: 'POST', 
    headers: {'Content-Type': 'application/json'},
    body: body 
  })
  .then(response => response.json())
  .then(data => dispatch({type: 'ADD_COMMENT', payload: data}))
  }
  
}

