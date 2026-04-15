import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.Navbar}>
            <h1>Resumaker</h1>
            <button id={styles.PrintButton}>Print</button>
        </nav>
    );
};

export default Navbar;
