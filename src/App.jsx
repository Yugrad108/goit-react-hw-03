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
  // const [contacts, setContacts] = useState(() => {
  //   const savedContacts = localStorage.getItem("contacts");
  //   return savedContacts ? JSON.parse(savedContacts) : tempContacts;
  // });
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("savedContacts");
    console.log("savecontacts", savedContacts);
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    } else {
      setContacts(tempContacts);
    }
  }, []);

  // const addContact = ({ username, number }) => {
  //   setContacts((prev) => [...prev, { id: nanoid(), name: username, number }]);
  // };

  const addContact = ({ username, number }) => {
    const newContacts = [...contacts, { id: nanoid(), name: username, number }];
    setContacts(newContacts);
    localStorage.setItem("savedContacts", JSON.stringify(newContacts));
  };

  // const delContact = (contactId) => {
  //   setContacts((prev) => prev.filter(({ id }) => id !== contactId));
  // };

  const delContact = (contactId) => {
    const newContacts = contacts.filter(({ id }) => id !== contactId);
    setContacts(newContacts);
    localStorage.setItem("savedContacts", JSON.stringify(newContacts));
  };

  const visibleContacts = contacts?.filter((contact) => {
    console.log(contact);
    return contact?.name?.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h1>Phonebook</h1>
      <ContactsForm onAdd={addContact} />
      <SearchBox value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDel={delContact} />
    </>
  );
}
export default App;
