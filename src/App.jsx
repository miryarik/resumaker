import "./App.css";
import { Fragment, useState } from "react";
import InputField from "./components/InputField";
import InputGroup from "./components/InputGroup";
import TextField from "./components/TextField";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
    const [fullName, setFullName] = useState("");
    const [designation, setDesignation] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [summary, setSummary] = useState("");
    const [education, setEducation] = useState({
        institute: "",
        course: "",
        from: "",
        to: "",
        score: "",
    });

    const [skills, setSkills] = useState([
        {
            label: "Languages",
            items: "",
        },
        {
            label: "Tools & Technologies",
            items: "",
        },
        {
            label: "Concepts",
            items: "",
        },
    ]);

    const [experience, setExperience] = useState([
        {
            company: "",
            designation: "",
            mode: "",
            from: "",
            to: "",
            content: "",
        },
    ]);

    function addNewExpField() {
        // create new blank experience object in state
        // to add a new controlled input

        const newExp = [...experience];
        newExp.push({
            company: "",
            designation: "",
            mode: "",
            from: "",
            to: "",
            content: "",
        });

        setExperience(newExp);
    }

    return (
        <>
            <Navbar />
            <main>
                <div className="inputs">
                    <h3>Basic Information</h3>
                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"Full Name"}
                            id={"name"}
                            placeholder={"John Doe"}
                            value={fullName}
                            setValue={setFullName}
                        />
                        <InputField
                            type={"text"}
                            label={"Designation"}
                            id={"designation"}
                            placeholder={"Senior Web Engineer"}
                            value={designation}
                            setValue={setDesignation}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"Location"}
                            id={"location"}
                            placeholder={"Silicon Valley"}
                            value={location}
                            setValue={setLocation}
                        />
                        <InputField
                            type={"tel"}
                            label={"Phone"}
                            id={"phone"}
                            placeholder={"+91-XXXX-XXXX-XX"}
                            value={phone}
                            setValue={setPhone}
                        />

                        <InputField
                            type={"email"}
                            label={"Email"}
                            id={"email"}
                            placeholder={"johnny@company.com"}
                            value={email}
                            setValue={setEmail}
                        />
                    </InputGroup>

                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"GitHub"}
                            id={"github"}
                            placeholder={"github.com/john"}
                            value={github}
                            setValue={setGithub}
                        />

                        <InputField
                            type={"text"}
                            label={"LinkedIn"}
                            id={"linkedin"}
                            placeholder={"linkedin.com/in/john"}
                            value={linkedin}
                            setValue={setLinkedin}
                        />
                    </InputGroup>

                    <TextField
                        label={"Summary"}
                        id={"summary"}
                        placeholder={
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio maiores hic aut est consequatur eius quisquam iusto blanditiis voluptatem."
                        }
                        value={summary}
                        setValue={setSummary}
                    />

                    <h3>Education</h3>
                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"Institue"}
                            id={"institure"}
                            placeholder={"University of Nowhere"}
                            value={education.institute}
                            onChange={(e) => {
                                const newState = {
                                    ...education,
                                    institute: e.target.value,
                                };
                                setEducation(newState);
                            }}
                        />
                        <InputField
                            type={"text"}
                            label={"Course"}
                            id={"course"}
                            placeholder={"Masters of Nothing"}
                            value={education.course}
                            onChange={(e) => {
                                const newState = {
                                    ...education,
                                    course: e.target.value,
                                };
                                setEducation(newState);
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
                                const newState = {
                                    ...education,
                                    from: e.target.value,
                                };
                                setEducation(newState);
                            }}
                        />
                        <InputField
                            type={"text"}
                            label={"To"}
                            id={"education-to"}
                            placeholder={"Feb 2022"}
                            value={education.to}
                            onChange={(e) => {
                                const newState = {
                                    ...education,
                                    to: e.target.value,
                                };
                                setEducation(newState);
                            }}
                        />
                        <InputField
                            type={"text"}
                            label={"Score"}
                            id={"score"}
                            placeholder={"7.2 / 10"}
                            value={education.score}
                            onChange={(e) => {
                                const newState = {
                                    ...education,
                                    score: e.target.value,
                                };
                                setEducation(newState);
                            }}
                        />
                    </InputGroup>

                    <h3>Skills and Technologies</h3>
                    {skills.map((section, idx) => (
                        <TextField
                            rows={2}
                            key={idx}
                            label={section.label}
                            value={section.items}
                            onChange={(e) => {
                                const newSkills = [...skills];
                                newSkills[idx].items = e.target.value;
                                setSkills(newSkills);
                            }}
                        />
                    ))}

                    <h3>Experience</h3>
                    {experience.map((exp, idx) => (
                        <Fragment key={idx}>
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
                <Resume
                    fullName={fullName}
                    designation={designation}
                    location={location}
                    phone={phone}
                    email={email}
                    github={github}
                    linkedin={linkedin}
                    summary={summary}
                    education={education}
                    skills={skills}
                    experience={experience}
                />
            </main>
        </>
    );
}

export default App;
