import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice';
import Authreducer from '../Reducer/Authreducer';
import Projectreducer from '../Reducer/Projectreducer';

export const store = configureStore({
  reducer: {
    auth:Authreducer,
    project:Projectreducer
    // counter: counterReducer,
  },
});
