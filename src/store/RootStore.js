import { createStore } from 'redux';
import Middleware from '../middleware/Middleware';
import rootReducer from '../reducers/RootReducer';

const store = createStore(rootReducer, Middleware);

export default store;