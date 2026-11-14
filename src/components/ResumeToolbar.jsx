import { FONTS, FONT_SIZE } from "../lib/fonts";
import { PlusIcon } from "./Icons";
import styles from "../styles/ResumeToolbar.module.css";

const groups = [...new Set(FONTS.map((f) => f.group))];

const MinusIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
    >
        <path d="M5 12h14" />
    </svg>
);

const ResumeToolbar = ({ style, setStyle }) => {
    const setSize = (delta) =>
        setStyle((s) => ({
            ...s,
            fontSize: Math.min(
                FONT_SIZE.max,
                Math.max(FONT_SIZE.min, s.fontSize + delta),
            ),
        }));

    return (
        <div className={styles.ResumeToolbar}>
            <label className={styles.field}>
                <span>Font</span>
                <select
                    value={style.font}
                    onChange={(e) => {
                        const font = e.target.value;
                        setStyle((s) => ({ ...s, font }));
                    }}
                >
                    {groups.map((group) => (
                        <optgroup key={group} label={group}>
                            {FONTS.filter((f) => f.group === group).map((f) => (
                                <option key={f.id} value={f.id}>
                                    {f.label}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </select>
            </label>

            <div
                className={styles.field}
                role="group"
                aria-label="Content text size"
            >
                <span>Text size</span>
                <div className={styles.stepper}>
                    <button
                        onClick={() => setSize(-FONT_SIZE.step)}
                        disabled={style.fontSize <= FONT_SIZE.min}
                        aria-label="Decrease text size"
                    >
                        <MinusIcon />
                    </button>
                    <output aria-live="polite">{style.fontSize}px</output>
                    <button
                        onClick={() => setSize(FONT_SIZE.step)}
                        disabled={style.fontSize >= FONT_SIZE.max}
                        aria-label="Increase text size"
                    >
                        <PlusIcon size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResumeToolbar;
