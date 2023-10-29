//StateProvider -->reducer.js
//reducer.js is lowercase because it is not a component


// useReducer is a React Hook that is used for managing state in functional components. It is an alternative to the 
//more common useState Hook and is particularly useful when the state logic is more complex. Here's a brief explanation of useReducer:

// State Initialization: To use useReducer, you need to initialize a state and provide a reducer function. The state
// can be an object, an array, or any type that represents the current state of your component.

// Reducer Function: The reducer function takes two arguments: the current state and an action. It evaluates the action
// and returns a new state. The action is typically an object with a type and payload that describes what should change in the state.

// Dispatch Action: To update the state, you dispatch an action by calling dispatch with an action object. React then 
//calls your reducer with the current state and the action, and the new state is computed.

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

  
const reducer = (state, action) => {
  console.log(action);

//state is the state of the data layer and action is what we are dispatching into the data layer

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
// it just returns whatever the state currently is but
//but if we dispatch an action say set serch term, its gonna return what the new data layer should look like
//and also change the term inside of the data layer with whatever action term you dispatched

export default reducer;





