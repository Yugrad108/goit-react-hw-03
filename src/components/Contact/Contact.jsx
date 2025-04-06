import styles from "./Contact.module.css";

const Contact = ({ name, number, id, onDel }) => {
  return (
    <div key={id} className={styles.contact}>
      <div className={styles.info}>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => onDel(id)} type="submit" className={styles.button}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
