import styles from "../styles/TextField.module.css";

const TextField = ({
    value,
    setValue,
    onChange,
    label,
    id,
    placeholder,
    rows,
}) => {
    return (
        <label htmlFor={id} className={styles.TextField}>
            <span className={styles.Label}>{label}</span>

            <textarea
                value={value}
                onChange={onChange || ((e) => setValue(e.target.value))}
                id={id}
                placeholder={placeholder}
                maxLength={350}
                rows={rows || 6}
            />
        </label>
    );
};

export default TextField;
