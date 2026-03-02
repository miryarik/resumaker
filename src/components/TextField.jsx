import styles from "../styles/TextField.module.css";

const TextField = ({ value, setValue, label, id, placeholder }) => {
    return (
        <label htmlFor={id} className={styles.TextField}>
            <span className={styles.Label}>{label}</span>

            <textarea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                id={id}
                placeholder={placeholder}
                maxLength={350}
                rows={8}
            />
        </label>
    );
};

export default TextField;
