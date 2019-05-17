export function createUser(name, age){
  return(dispatch)=>{
    const body = JSON.stringify({name: name, age: age})
    console.log(body)
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

