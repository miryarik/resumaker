import InputGroup from "./InputGroup";
import InputField from "./InputField";
import TextField from "./TextField";
import styles from "../styles/Card.module.css";

function Projects({
    isActive,
    projects,
    setProjects,
    deleteProject,
    addNewProjectsField,
}) {
    return (
        <>
            {isActive && (
                <div className="input-projects">
                    <h3>Projects</h3>
                    {projects.map((project, idx) => (
                        <div className={styles.entry} key={idx}>
                            <div className={styles.actions}>
                                <button
                                    className={styles.deleteButton}
                                    onClick={() => deleteProject(idx)}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        stroke-width="2"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="lucide lucide-trash2-icon lucide-trash-2"
                                    >
                                        <path d="M10 11v6" />
                                        <path d="M14 11v6" />
                                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
                                        <path d="M3 6h18" />
                                        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                                    </svg>
                                </button>
                            </div>
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
                                placeholder={
                                    "Use -> before a line to create a bullet, e.g \n -> This is a bullet. \n -> This is another."
                                }
                                onChange={(e) => {
                                    const newProjects = [...projects];
                                    newProjects[idx].content = e.target.value;
                                    setProjects(newProjects);
                                }}
                            />
                        </div>
                    ))}
                    <button
                        className={styles.addButton}
                        onClick={addNewProjectsField}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="lucide lucide-plus-icon lucide-plus"
                        >
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                        </svg>
                    </button>
                </div>
            )}
        </>
    );
}

export default Projects;
