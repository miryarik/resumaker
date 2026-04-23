import InputGroup from "./InputGroup";
import InputField from "./InputField";
import styles from "../styles/Card.module.css";

export const Education = ({
    isActive,
    educations,
    setEducations,
    addNewEducation,
    deleteEducation,
}) => {
    return (
        <>
            {isActive && (
                <div className="input-education">
                    <h3>Education</h3>
                    {educations.map((education, idx) => (
                        <div className={styles.entry} key={idx}>
                            <div className={styles.actions}>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => deleteEducation(idx)}
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
                                    label={"Institue"}
                                    id={"institure"}
                                    placeholder={"University of Nowhere"}
                                    value={education.institute}
                                    onChange={(e) => {
                                        const newEducations = [...educations];
                                        newEducations[idx].institute =
                                            e.target.value;
                                        setEducations(newEducations);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"Course"}
                                    id={"course"}
                                    placeholder={"Masters of Nothing"}
                                    value={education.course}
                                    onChange={(e) => {
                                        const newEducations = [...educations];
                                        newEducations[idx].course =
                                            e.target.value;
                                        setEducations(newEducations);
                                    }}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputField
                                    type={"text"}
                                    label={"From"}
                                    id={"education-from"}
                                    placeholder={"Feb 2000"}
                                    value={education.from}
                                    onChange={(e) => {
                                        const newEducations = [...educations];
                                        newEducations[idx].from =
                                            e.target.value;
                                        setEducations(newEducations);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"To"}
                                    id={"education-to"}
                                    placeholder={"Feb 2022"}
                                    value={education.to}
                                    onChange={(e) => {
                                        const newEducations = [...educations];
                                        newEducations[idx].to = e.target.value;
                                        setEducations(newEducations);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"Score"}
                                    id={"score"}
                                    placeholder={"7.2 / 10"}
                                    value={education.score}
                                    onChange={(e) => {
                                        const newEducations = [...educations];
                                        newEducations[idx].score =
                                            e.target.value;
                                        setEducations(newEducations);
                                    }}
                                />
                            </InputGroup>
                        </div>
                    ))}
                    <button
                        className={styles.addButton}
                        onClick={addNewEducation}
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
