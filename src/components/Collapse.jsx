import styles from "../styles/Collapse.module.css";

// Animates its children's height open on mount (when `appear`) and closed
// when `leaving` flips to true, then calls `onLeft` so the parent can
// actually remove the item from state.
const Collapse = ({ appear, leaving, onAppeared, onLeft, children }) => {
    const state = leaving ? styles.leaving : appear ? styles.appearing : "";

    return (
        <div
            className={`${styles.Collapse} ${state}`}
            onAnimationEnd={(e) => {
                if (e.target !== e.currentTarget) return;
                if (leaving) onLeft?.();
                else if (appear) onAppeared?.();
            }}
        >
            <div className={styles.inner}>{children}</div>
        </div>
    );
};

export default Collapse;
