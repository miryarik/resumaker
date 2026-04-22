import { Fragment } from "react";
import InputGroup from "./InputGroup";
import InputField from "./InputField";
import TextField from "./TextField";

function Projects({ isActive, projects, setProjects, addNewProjectsField }) {
    return (
        <>
            {isActive && (
                <div className="input-projects">
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
            )}
        </>
    );
}

export default Projects;
