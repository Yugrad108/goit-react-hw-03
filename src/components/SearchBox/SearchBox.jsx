import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <div className={styles.searchbox}>
      <label htmlFor="searchbox">Find contacts by name</label>
      <input
        type="text"
        id="searchbox"
        value={value}
        // onChange={(event) => console.log(event.target.value)}

        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}
