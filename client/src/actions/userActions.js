export function createUser(name, age){
  return(dispatch)=>{
    const body = JSON.stringify({name: name, age: age})
    dispatch({type: 'CREATE_USER'});
  }
}