import InputGroup from "./InputGroup";
import InputField from "./InputField";
import TextField from "./TextField";
import EntryList from "./EntryList";

export const Experience = ({ experience, setExperience }) => {
    return (
        <div className="input-experience">
            <h3>Experience</h3>
            <EntryList
                section="experience"
                items={experience}
                setItems={setExperience}
                addLabel="Add experience"
                renderFields={(exp, bind) => (
                    <>
                        <InputGroup>
                            <InputField
                                type={"text"}
                                label={"Company Name"}
                                placeholder={"No Company"}
                                value={exp.company}
                                onChange={bind("company")}
                            />
                            <InputField
                                type={"text"}
                                label={"Designation"}
                                placeholder={"Nothing Developer"}
                                value={exp.designation}
                                onChange={bind("designation")}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputField
                                type={"text"}
                                label={"Mode"}
                                placeholder={"Remote"}
                                value={exp.mode}
                                onChange={bind("mode")}
                            />
                            <InputField
                                type={"text"}
                                label={"From"}
                                placeholder={"Dec 2025"}
                                value={exp.from}
                                onChange={bind("from")}
                            />
                            <InputField
                                type={"text"}
                                label={"To"}
                                placeholder={"Present"}
                                value={exp.to}
                                onChange={bind("to")}
                            />
                        </InputGroup>
                        <TextField
                            label={"Details"}
                            rows={4}
                            value={exp.content}
                            placeholder={
                                "Use -> before a line to create a bullet, e.g \n -> This is a bullet. \n -> This is another."
                            }
                            onChange={bind("content")}
                        />
                    </>
                )}
            />
        </div>
    );
};
