export default function(state = {}, action) {
  switch (action.type) {
    case 'Get_Artical':
      return {...state, posts: action.payload};
    default:
      return state;
  }
}
