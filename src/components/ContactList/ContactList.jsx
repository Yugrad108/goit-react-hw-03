import Contact from "../Contact/Contact";

const ContactList = ({ contacts, onDel }) => {
  return (
    <ul>
      {contacts?.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} onDel={() => onDel(id)} />
      ))}
    </ul>
  );
};

export default ContactList;
