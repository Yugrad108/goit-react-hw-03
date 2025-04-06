import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
const ContactList = ({ contacts, onDel }) => {
  return (
    <div className={styles.list}>
      {contacts?.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} onDel={() => onDel(id)} />
      ))}
    </div>
  );
};

export default ContactList;
