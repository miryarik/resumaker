import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import BasicInformation from "./components/BasicInformation";
import { Education } from "./components/Education";
import Skills from "./components/Skills";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";

const inputTabs = ["basic", "education", "skills", "experience", "projects"];

function App() {
    const [fullName, setFullName] = useState("");
    const [designation, setDesignation] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");
    const [summary, setSummary] = useState("");
    const basicInfoStates = {
        fullName: {
            value: fullName,
            set: setFullName,
        },
        designation: {
            value: designation,
            set: setDesignation,
        },
        location: {
            value: location,
            set: setLocation,
        },
        phone: {
            value: phone,
            set: setPhone,
        },
        email: {
            value: email,
            set: setEmail,
        },
        github: {
            value: github,
            set: setGithub,
        },
        linkedin: {
            value: linkedin,
            set: setLinkedin,
        },
        summary: {
            value: summary,
            set: setSummary,
        },
    };

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

    const [activeTab, setActiveTab] = useState("basic");

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

    function deleteProject(idx) {
        const newProjects = [...projects];
        if (newProjects.length > 1) newProjects.splice(idx, 1);
        setProjects(newProjects);
    }

    function toggleInputs() {
        document.querySelector(".inputs").style.display != "none"
            ? (document.querySelector(".inputs").style.display = "none")
            : (document.querySelector(".inputs").style.display = "block");
    }

    return (
        <>
            <Navbar toggleInputs={toggleInputs} />
            <main>
                <div className="inputs">
                    <div className="input-tabs">
                        {inputTabs.map((tab) => (
                            <button
                                key={tab}
                                className={activeTab == tab ? "active" : ""}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab[0].toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>

                    <div className="input-fields">
                        <BasicInformation
                            isActive={activeTab == "basic"}
                            state={basicInfoStates}
                        />

                        <Education
                            isActive={activeTab == "education"}
                            educations={educations}
                            setEducations={setEducations}
                            addNewEducation={addNewEducation}
                            deleteEducation={deleteEducation}
                        />

                        <Skills
                            isActive={activeTab == "skills"}
                            skills={skills}
                            setSkills={setSkills}
                        />

                        <Experience
                            isActive={activeTab == "experience"}
                            experience={experience}
                            setExperience={setExperience}
                            deleteExperience={deleteExperience}
                            addNewExpField={addNewExpField}
                        />

                        <Projects
                            isActive={activeTab == "projects"}
                            projects={projects}
                            setProjects={setProjects}
                            deleteProject={deleteProject}
                            addNewProjectsField={addNewProjectsField}
                        />
                    </div>
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
