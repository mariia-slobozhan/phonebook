import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { getContacts } from "redux/contacts/contacts-selectors";
import { addContact } from "redux/contacts/contacts-operations";
import { toast } from "react-toastify";
import s from "./PhonebookForm.module.css";

export default function PhonebookForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const items = useSelector(getContacts);
  const dispatch = useDispatch();
  const addNewContact = (contact) => dispatch(addContact(contact));

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const normalizedContact = name.toLowerCase();
    if (items.some((item) => item.name.toLowerCase() === normalizedContact)) {
      toast.error(`${name} is already in contact list`);
      return;
    }
    addNewContact({ name, phone });
    resetForm();
  };

  const resetForm = () => {
    setName("");
    setPhone("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className={s.label}>
        Phone number
        <input
          className={s.input}
          type="tel"
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
          value={phone}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

PhonebookForm.propTypes = {
  addNewContact: PropTypes.func,
};
