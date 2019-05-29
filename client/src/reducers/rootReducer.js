export default function rootReducer( state = {
  isFetchingUser: false,
  isCreatingComment: false,
  user: [],
  comments: [],
}, action ){
  switch (action.type){
    case 'CREATE_USER':
      return { ...state, isFetchingUser: true  }  
    case 'SET_USER':
      return { ...state, isFetchingUser: false, user: action.payload }  
    case 'CREATE_COMMENT' :
      return {...state, isCreatingComment: true}
    case 'ADD_COMMENT':
      return {...state, isCreatingComment: false ,comments: state.comments.concat(action.payload)} 
    default: 
    return state
  }
}