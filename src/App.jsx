import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactsForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

const tempContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("savedContacts");
    return savedContacts ? JSON.parse(savedContacts) : tempContacts;
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("savedContacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ username, number }) => {
    const newContacts = [...contacts, { id: nanoid(), name: username, number }];
    setContacts(newContacts);
  };

  const delContact = (contactId) => {
    const newContacts = contacts.filter(({ id }) => id !== contactId);
    setContacts(newContacts);
  };

  const filteredContacts = contacts?.filter((contact) => {
    return contact?.name?.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={filteredContacts} onDel={delContact} />
    </>
  );
}
export default App;
