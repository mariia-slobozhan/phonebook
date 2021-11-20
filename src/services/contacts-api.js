import axios from "axios";

axios.defaults.baseURL = "https://61981ad0164fa60017c22f69.mockapi.io/api/v1";

export async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

export async function addContact(contact) {
  const { data } = await axios.post("/contacts", contact);
  return data;
}

export async function deleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data.id;
}
