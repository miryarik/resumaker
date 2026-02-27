import { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import InputGroup from "./components/InputGroup";
import { Navbar } from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
    const [fullName, setFullName] = useState("");
    const [designation, setDesignation] = useState("");
    const [location, setLocation] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [github, setGithub] = useState("");
    const [linkedin, setLinkedin] = useState("");

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
                </div>
                <Resume
                    fullName={fullName}
                    designation={designation}
                    location={location}
                    phone={phone}
                    email={email}
                    github={github}
                    linkedin={linkedin}
                />
            </main>
        </>
    );
}

export default App;
