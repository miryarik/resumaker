import InputGroup from "./InputGroup";
import InputField from "./InputField";
import EntryList from "./EntryList";

export const Education = ({ educations, setEducations }) => {
    return (
        <div className="input-education">
            <h3>Education</h3>
            <EntryList
                section="educations"
                items={educations}
                setItems={setEducations}
                addLabel="Add education"
                renderFields={(education, bind) => (
                    <>
                        <InputGroup>
                            <InputField
                                type={"text"}
                                label={"Institute"}
                                placeholder={"University of Nowhere"}
                                value={education.institute}
                                onChange={bind("institute")}
                            />
                            <InputField
                                type={"text"}
                                label={"Course"}
                                placeholder={"Masters of Nothing"}
                                value={education.course}
                                onChange={bind("course")}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputField
                                type={"text"}
                                label={"From"}
                                placeholder={"Feb 2000"}
                                value={education.from}
                                onChange={bind("from")}
                            />
                            <InputField
                                type={"text"}
                                label={"To"}
                                placeholder={"Feb 2022"}
                                value={education.to}
                                onChange={bind("to")}
                            />
                            <InputField
                                type={"text"}
                                label={"Score"}
                                placeholder={"7.2 / 10"}
                                value={education.score}
                                onChange={bind("score")}
                            />
                        </InputGroup>
                    </>
                )}
            />
        </div>
    );
};
