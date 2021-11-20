import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "services/contacts-api";

export const fetchContacts = createAsyncThunk(
  "contscts/fetchContacts",
  async () => {
    const contacts = await contactsAPI.fetchContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  "contscts/addContact",
  async (contact) => {
    const addContact = await contactsAPI.addContact(contact);
    return addContact;
  }
);

export const deleteContact = createAsyncThunk(
  "contscts/deleteContact",
  async (id) => {
    const deletedContact = await contactsAPI.deleteContact(id);
    return deletedContact;
  }
);

// import {
//   addContactRequest,
//   addContactSuccess,
//   addContactError,
//   deleteContactRequest,
//   deleteContactSuccess,
//   deleteContactError,
//   fetchContactRequest,
//   fetchContactSuccess,
//   fetchContactError,
// } from "./contacts-actions";

// export const fetchContacts = () => async (dispatch) => {
//   dispatch(fetchContactRequest());

//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(fetchContactSuccess(contacts));
//   } catch (error) {
//     dispatch(fetchContactError(error));
//   }
// };

// export const addContact = (contact) => async (dispatch) => {
//   dispatch(addContactRequest());
//   try {
//     const addContact = await contactsAPI.addContact(contact);
//     dispatch(addContactSuccess(addContact));
//   } catch (error) {
//     dispatch(addContactError(error));
//   }
// };

// export const deleteContact = (id) => async (dispatch) => {
//   dispatch(deleteContactRequest());

//  try {
//   const deletedContact = await contactsAPI.deleteContact(id);
//   dispatch(deleteContactSuccess(deletedContact));
//  } catch (error) {
//    dispatch(deleteContactError(error))
//  }
// };
