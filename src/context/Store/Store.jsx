import { createContext, useReducer } from 'react';

const initialState = {
  features: {
    bookmarking: true,
    searching: false,
    sharing: false,
  },
  faq: {
    tab1: false,
    tab2: false,
    tab3: false,
    tab4: false,
  },
};

const setInitialState = () => {
  const localState = localStorage.getItem('active-states');

  if (localState) {
    return JSON.parse(localState);
  } else {
    localStorage.setItem('active-states', JSON.stringify(initialState));
    return initialState;
  }
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'UPDATE_FEATURES': {
      const newState = { ...state };
      for (const feature in newState.features) {
        newState.features[feature] = feature === payload.feature ? payload.bool : false;
      }
      localStorage.setItem('active-states', JSON.stringify(newState));
      return newState;
    }
    case 'UPDATE_FAQ': {
      const newState = { ...state };
      for (const faq in newState.faq) {
        newState.faq[faq] = faq === payload.faq ? payload.bool : false;
      }
      localStorage.setItem('active-states', JSON.stringify(newState));
      return newState;
    }
    default:
      return state;
  }
};

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, setInitialState());

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
