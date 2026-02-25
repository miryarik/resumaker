import styles from "../styles/InputField.module.css";

const InputField = ({ type, label, id, placeholder }) => {
    return (
        <label htmlFor={id} className={styles.InputField}>
            <span className={styles.Label}>{label}</span>

            <input type={type} id={id} placeholder={placeholder} />
        </label>
    );
};

export default InputField;
