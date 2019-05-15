export default function rootReducer( state = {
  isFetchingUser: false,
  user: [],
}, action ){
  switch (action.type){
    case 'CREATE_USER':
      return { ...state, isFetchingUser: true  }  
    case 'SET_USER':
      return { isFetchingUser: false, user: action.data  }  
    default: 
    return state
  }
}