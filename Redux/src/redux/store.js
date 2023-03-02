import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';

const enshancer = devToolsEnhancer();

export const store = createStore(rootReducer, enshancer);
