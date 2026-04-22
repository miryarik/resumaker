import { Fragment } from "react";
import InputGroup from "./InputGroup";
import InputField from "./InputField";
import TextField from "./TextField";

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
                        <Fragment key={idx}>
                            <button onClick={() => deleteExperience(idx)}>
                                Delete Experience
                            </button>
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
                                onChange={(e) => {
                                    const newExp = [...experience];
                                    newExp[idx].content = e.target.value;
                                    setExperience(newExp);
                                }}
                            />
                        </Fragment>
                    ))}
                    <button onClick={addNewExpField}>Add Experience</button>
                </div>
            )}
        </>
    );
};
