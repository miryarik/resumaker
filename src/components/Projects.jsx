import InputGroup from "./InputGroup";
import InputField from "./InputField";
import TextField from "./TextField";
import EntryList from "./EntryList";

function Projects({ projects, setProjects }) {
    return (
        <div className="input-projects">
            <h3>Projects</h3>
            <EntryList
                section="projects"
                items={projects}
                setItems={setProjects}
                addLabel="Add project"
                renderFields={(project, bind) => (
                    <>
                        <InputGroup>
                            <InputField
                                type={"text"}
                                label={"Name"}
                                placeholder={"Uncool Name"}
                                value={project.name}
                                onChange={bind("name")}
                            />
                            <InputField
                                type={"text"}
                                label={"Tools"}
                                placeholder={"Some uncool tools"}
                                value={project.tools}
                                onChange={bind("tools")}
                            />
                        </InputGroup>
                        <InputGroup>
                            <InputField
                                type={"url"}
                                label={"Link"}
                                placeholder={"Live Link"}
                                value={project.link}
                                onChange={bind("link")}
                            />
                            <InputField
                                type={"url"}
                                label={"GitHub"}
                                placeholder={"GitHub Repo Link"}
                                value={project.github}
                                onChange={bind("github")}
                            />
                        </InputGroup>
                        <TextField
                            label={"Details"}
                            rows={4}
                            value={project.content}
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
}

export default Projects;
