import styles from "./SearchBox.module.css";
import stylesForm from "../ContactForm/ContactForm.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchbox}>
      <label htmlFor="searchbox">Find contacts by name</label>
      <input
        className={stylesForm.input}
        type="text"
        id="searchbox"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
