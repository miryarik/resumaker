import styles from "../styles/Resume.module.css";
import { getBullets } from "../utils";
import ResumeHeading from "./ResumeHeading";
import {
    Content,
    Heading,
    ResumeSection,
    Side,
    SubHeading,
} from "./ResumeSection";

getBullets;

const Resume = ({
    fullName,
    designation,
    location,
    phone,
    email,
    github,
    linkedin,
    summary,
    educations,
    skills,
    experience,
    projects,
}) => {
    const contactInfo = [
        {
            value: location,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
            ),
        },
        {
            value: phone,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path
                        fill-rule="evenodd"
                        d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
                    />
                </svg>
            ),
        },
        {
            value: email,
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914" />
                </svg>
            ),
        },
    ];

    const linkInfo = [
        {
            value: github,
            label: "GitHub",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                </svg>
            ),
        },
        {
            value: linkedin,
            label: "LinkedIn",
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                </svg>
            ),
        },
    ];

    return (
        <div className={styles.ResumeContainer}>
            <div className={styles.Resume}>
                <ResumeHeading
                    fullName={fullName}
                    designation={designation}
                    contactInfo={contactInfo}
                    linkInfo={linkInfo}
                />

                {summary && (
                    <ResumeSection>
                        <Heading>Summary</Heading>
                        <Content>
                            <p>{summary}</p>
                        </Content>
                    </ResumeSection>
                )}

                {educations[0].institute && (
                    <ResumeSection>
                        <Heading>Education</Heading>
                        <Content>
                            {educations.map((education, idx) => (
                                <div key={idx}>
                                    <SubHeading>{education.course}</SubHeading>
                                    <p>{education.institute}</p>
                                    <Side>
                                        <p>
                                            {`${education.from} ${education.to ? " - " + education.to : ""}`}
                                        </p>
                                        <p>
                                            {education.score
                                                ? "Score: " + education.score
                                                : ""}
                                        </p>
                                    </Side>
                                </div>
                            ))}
                        </Content>
                    </ResumeSection>
                )}

                {(skills[0].items || skills[1].items || skills[2].items) && (
                    <ResumeSection>
                        <Heading>Techinal Skills</Heading>
                        <Content>
                            {skills.map((skill, idx) => (
                                <p key={idx}>
                                    <strong>
                                        {skill.items ? skill.label + ":" : ""}
                                    </strong>{" "}
                                    {skill.items}
                                </p>
                            ))}
                        </Content>
                    </ResumeSection>
                )}

                {experience[0].company && (
                    <ResumeSection>
                        <Heading>Experience</Heading>
                        <Content>
                            {experience.map((exp, idx) => (
                                <div key={idx}>
                                    <SubHeading>{exp.designation}</SubHeading>
                                    <p>{exp.company}</p>
                                    <ul>
                                        {getBullets(exp.content).map(
                                            (item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ),
                                        )}
                                    </ul>
                                    <Side>
                                        <p>
                                            {`${exp.from} ${exp.to ? " - " + exp.to : ""}`}
                                        </p>
                                        <p>{exp.mode}</p>
                                    </Side>
                                </div>
                            ))}
                        </Content>
                    </ResumeSection>
                )}

                {projects[0].name && (
                    <ResumeSection>
                        <Heading>Projects</Heading>
                        <Content>
                            {projects.map((project, idx) => (
                                <div key={idx}>
                                    <SubHeading>{project.name}</SubHeading>
                                    <p>{project.tools}</p>
                                    <ul>
                                        {getBullets(project.content).map(
                                            (item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ),
                                        )}
                                    </ul>
                                    <Side>
                                        <a hrek={project.link} target="_blank">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5"
                                                />
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0z"
                                                />
                                            </svg>
                                            Live
                                        </a>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="16"
                                                height="16"
                                                fill="currentColor"
                                                viewBox="0 0 16 16"
                                            >
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                            GitHub
                                        </a>
                                    </Side>
                                </div>
                            ))}
                        </Content>
                    </ResumeSection>
                )}
            </div>
        </div>
    );
};

export default Resume;
