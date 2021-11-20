import "./App.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "../node_modules/react-toastify/dist/ReactToastify.css";
import PhonebookForm from "./Components/PhonebookForm/PhonebookForm";
import ContactList from "./Components/ContactsList/ContactsList";
import Filter from "./Components/Filter/Filter";
import { fetchContacts } from "redux/contacts/contacts-operations";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ToastContainer />
      <PhonebookForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
