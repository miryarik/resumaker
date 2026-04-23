import TextField from "./TextField";

const placeholders = [
    "JavaScript, Ruby, Java, SQL",
    "Vite, React.js, Jest, Git",
    "Test Driven Development, Data Structures, Algorithms",
];

const Skills = ({ isActive, skills, setSkills }) => {
    return (
        <>
            {isActive && (
                <div className="input-skills">
                    <h3>Skills and Technologies</h3>
                    {skills.map((section, idx) => (
                        <TextField
                            rows={2}
                            key={idx}
                            label={section.label}
                            value={section.items}
                            placeholder={placeholders[idx]}
                            onChange={(e) => {
                                const newSkills = [...skills];
                                newSkills[idx].items = e.target.value;
                                setSkills(newSkills);
                            }}
                        />
                    ))}
                </div>
            )}
        </>
    );
};

export default Skills;
