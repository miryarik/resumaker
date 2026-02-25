import styles from "../styles/InputGroup.module.css";

const InputGroup = ({ children }) => {
    return <div className={styles.InputGroup}>{children}</div>;
};

export default InputGroup;
