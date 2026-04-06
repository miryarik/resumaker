import styles from "../styles/InputField.module.css";

const InputField = ({
    type,
    value,
    setValue,
    onChange,
    label,
    id,
    placeholder,
}) => {
    return (
        <label htmlFor={id} className={styles.InputField}>
            <span className={styles.Label}>{label}</span>

            <input
                type={type}
                value={value}
                onChange={onChange ?? ((e) => setValue(e.target.value))}
                id={id}
                placeholder={placeholder}
            />
        </label>
    );
};

export default InputField;
