import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InputGroup from "./components/InputGroup";
import { Navbar } from "./components/Navbar";
import Resume from "./components/Resume";
import TextField from "./components/TextField";

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
        date: "",
        score: "",
    });

    return (
        <>
            <Navbar />
            <main>
                <div className="inputs">
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
                            label={"From - To"}
                            id={"date"}
                            placeholder={"Feb 2000 - Jan 2024"}
                            value={education.date}
                            onChange={(e) => {
                                const newState = {
                                    ...education,
                                    date: e.target.value,
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
                />
            </main>
        </>
    );
}

export default App;
