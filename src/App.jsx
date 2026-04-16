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
    const [educations, setEducations] = useState([
        {
            institute: "",
            course: "",
            from: "",
            to: "",
            score: "",
        },
    ]);

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

    const [projects, setProjects] = useState([
        {
            name: "",
            tools: "",
            link: "",
            github: "",
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

    function addNewProjectsField() {
        // create new blank project object in state
        // to add a new controlled input

        const newProjects = [...projects];
        newProjects.push({
            name: "",
            tools: "",
            link: "",
            github: "",
            content: "",
        });

        setProjects(newProjects);
    }

    function addNewEducation() {
        // create new blank education object in state
        // to add a new controlled input

        const newEducations = [...educations];
        newEducations.push({
            institute: "",
            course: "",
            from: "",
            to: "",
            score: "",
        });

        setEducations(newEducations);
    }

    function deleteEducation(idx) {
        const newEducations = [...educations];
        if (newEducations.length > 1) newEducations.splice(idx, 1);
        setEducations(newEducations);
    }

    function deleteExperience(idx) {
        const newExperience = [...experience];
        if (newExperience.length > 1) newExperience.splice(idx, 1);
        setExperience(newExperience);
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

                    <h3>Projects</h3>
                    {projects.map((project, idx) => (
                        <Fragment key={idx}>
                            <InputGroup>
                                <InputField
                                    type={"text"}
                                    label={"Name"}
                                    placeholder={"Uncool Name"}
                                    value={project.name}
                                    onChange={(e) => {
                                        const newProjects = [...projects];
                                        newProjects[idx].name = e.target.value;
                                        setProjects(newProjects);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"Tools"}
                                    placeholder={"Some uncool tools"}
                                    value={project.tools}
                                    onChange={(e) => {
                                        const newProjects = [...projects];
                                        newProjects[idx].tools = e.target.value;
                                        setProjects(newProjects);
                                    }}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputField
                                    type={"text"}
                                    label={"Link"}
                                    placeholder={"Live Link"}
                                    value={project.link}
                                    onChange={(e) => {
                                        const newProjects = [...projects];
                                        newProjects[idx].link = e.target.value;
                                        setProjects(newProjects);
                                    }}
                                />
                                <InputField
                                    type={"text"}
                                    label={"GitHub"}
                                    placeholder={"GitHub Repo Link"}
                                    value={project.github}
                                    onChange={(e) => {
                                        const newProjects = [...projects];
                                        newProjects[idx].github =
                                            e.target.value;
                                        setProjects(newProjects);
                                    }}
                                />
                            </InputGroup>
                            <TextField
                                label={"Details"}
                                rows={4}
                                value={project.content}
                                onChange={(e) => {
                                    const newProjects = [...projects];
                                    newProjects[idx].content = e.target.value;
                                    setProjects(newProjects);
                                }}
                            />
                        </Fragment>
                    ))}

                    <button onClick={addNewProjectsField}>Add Project</button>
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
                    educations={educations}
                    skills={skills}
                    experience={experience}
                    projects={projects}
                />
            </main>
        </>
    );
}

export default App;
