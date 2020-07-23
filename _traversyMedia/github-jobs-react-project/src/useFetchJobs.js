import { useReducer } from 'react';

const ACTIONS = {
  MAKE_REQUEST: 'make_request',
  GET_DATA: 'get-data',
  ERROR: 'error'
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.MAKE_REQUEST:
      
    case ACTIONS.GET_DATA:
      
    case ACTIONS.ERROR:
  } 
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, { jobs: [], loading: true });

  dispatch({type: "Hello", payload: { x = 3}})
  return {
    jobs: [],
    loading: false,
    error: false,
  };
}
