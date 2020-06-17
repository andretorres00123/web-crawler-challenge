import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

export const makeStore = (initialState, { isServer })  => {
  const middlewares = [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);
  if (isServer) {
    return createStore(reducers, initialState, composedEnhancers);
  } else {
    if (!window.store) {
      window.store = createStore(reducers, initialState, composedEnhancers);
    }
    return window.store;
  }
};
