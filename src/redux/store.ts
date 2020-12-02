import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import charactersReducer from './characters-reducer';
import appReducer from './app-reducer';
import { sagaWatcher } from './sagas';

const rootReducer = combineReducers({
  characters: charactersReducer,
  app: appReducer,
});

const saga = createSagaMiddleware();

export type AppStateType = ReturnType<typeof rootReducer>;

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(saga)));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
saga.run(sagaWatcher);

export default store;
