import InputGroup from "./InputGroup";
import InputField from "./InputField";
import TextField from "./TextField";
import styles from "../styles/Card.module.css";

export const Experience = ({
    isActive,
    experience,
    setExperience,
    deleteExperience,
    addNewExpField,
}) => {
    return (
        <>
            {isActive && (
                <div className="input-experience">
                    <h3>Experience</h3>
                    {experience.map((exp, idx) => (
                        <div className={styles.entry} key={idx}>
                            <div className={styles.actions}>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => deleteExperience(idx)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-trash2-icon lucide-trash-2"
                                    >
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                            </div>
                            <InputGroup>
                                <InputField
                                    type={"text"}
                                    label={"Company Name"}
                                    placeholder={"No Company"}
                                    value={exp.company}
                                    onChange={(e) => {
                                        const newExp = [...experience];
                                        newExp[idx].company = e.target.value;
                                        setExperience(newExp);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"Designation"}
                                    placeholder={"Nothing Developer"}
                                    value={exp.designation}
                                    onChange={(e) => {
                                        const newExp = [...experience];
                                        newExp[idx].designation =
                                            e.target.value;
                                        setExperience(newExp);
                                    }}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputField
                                    type={"text"}
                                    label={"Mode"}
                                    placeholder={"Remote"}
                                    value={exp.mode}
                                    onChange={(e) => {
                                        const newExp = [...experience];
                                        newExp[idx].mode = e.target.value;
                                        setExperience(newExp);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"From"}
                                    placeholder={"Dec 2025"}
                                    value={exp.from}
                                    onChange={(e) => {
                                        const newExp = [...experience];
                                        newExp[idx].from = e.target.value;
                                        setExperience(newExp);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"To"}
                                    placeholder={"Present"}
                                    value={exp.to}
                                    onChange={(e) => {
                                        const newExp = [...experience];
                                        newExp[idx].to = e.target.value;
                                        setExperience(newExp);
                                    }}
                                />
                            </InputGroup>
                            <TextField
                                label={"Details"}
                                rows={4}
                                value={exp.content}
                                placeholder={
                                    "Use -> before a line to create a bullet, e.g \n -> This is a bullet. \n -> This is another."
                                }
                                onChange={(e) => {
                                    const newExp = [...experience];
                                    newExp[idx].content = e.target.value;
                                    setExperience(newExp);
                                }}
                            />
                        </div>
                    ))}
                    <button
                        className={styles.addButton}
                        onClick={addNewExpField}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-plus-icon lucide-plus"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
};
