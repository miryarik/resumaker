import styles from "../styles/Navbar.module.css";
import ResumeMenu from "./ResumeMenu";

const Navbar = ({ toggleInputs, inputsOpen, library }) => {
    return (
        <nav className={styles.Navbar}>
            <div className={styles.left}>
                <button
                    className={styles.menuButton}
                    onClick={toggleInputs}
                    aria-label={inputsOpen ? "Hide editor" : "Show editor"}
                    aria-expanded={inputsOpen}
                    aria-controls="inputs-panel"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                        />
                    </svg>
                </button>
                <div className={styles.brand}>
                    <img src="/resumaker.png" alt="R" />
                    <h1>esumaker</h1>
                </div>
            </div>
            <div className={styles.right}>
                <ResumeMenu library={library} />
                <button
                    id={styles.PrintButton}
                    onClick={() => window.print()}
                    aria-label="Print"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                    >
                        <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" />
                        <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
                    </svg>
                    <span className={styles.printLabel}>Print</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
