// import { configureStore } from '@reduxjs/toolkit'
// import createSagaMiddleware from 'redux-saga'

// import reducer from './reducers'
// import mySaga from './sagas/showSagas'

// const sagaMiddleware = createSagaMiddleware()

// export const store = configureStore(
//   reducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
// )

// // then run the saga
// sagaMiddleware.run(mySaga)

// // render the application

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
});
