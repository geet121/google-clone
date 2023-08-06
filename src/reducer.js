//StateProvider -->reducer.js
//reducer.js is lowercase because it is not a component

//initialState
export const initialState = {
  term: null,
};

//whenever we want to change the data, we need to dispatch an action 
//which says in the case to go ahead and change or set the search term

//actiontypes
export const actionTypes = {
  SET_SEARCH_TERM: "SET_SEARCH_TERM",
};

//state is the state of the data  layer and action is what we are dispatching into the data layer
  
const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case actionTypes.SET_SEARCH_TERM:
      return {
        ...state,
        term: action.term,
      };

    default:
      return state;
  }
};

//the reducer listen for any dispatched action if we don't know what the dispatched action is
// it just returns whatever the state currently was but
//but if we dispatch an action say set serch term, its gonna return what the new data layer should look like
//and also change the term inside of the data layer with whatever action term you dispatched

export default reducer;
