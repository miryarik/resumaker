import styles from "../styles/Resume.module.css";

function ResumeSection({ children }) {
    return <div className={styles.ResumeSection}>{children}</div>;
}

function Heading({ children }) {
    return <h4 className={styles.Heading}>{children}</h4>;
}

function Content({ children }) {
    return <div className={styles.Content}>{children}</div>;
}

function SubHeading({ children }) {
    return <h5>{children}</h5>;
}

function Side({ children }) {
    return <div className={styles.Side}>{children}</div>;
}

export { ResumeSection, Heading, Content, SubHeading, Side };
