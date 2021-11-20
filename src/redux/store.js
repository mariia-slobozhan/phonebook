import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import contactsReducer from "./contacts/contacts-reducer";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
