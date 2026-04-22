import { Fragment } from "react";
import InputGroup from "./InputGroup";
import InputField from "./InputField";

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
                        <Fragment key={idx}>
                            <button onClick={() => deleteEducation(idx)}>
                                Delete
                            </button>
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
                        </Fragment>
                    ))}
                    <button onClick={addNewEducation}>Add Education</button>
                </div>
            )}
        </>
    );
};
