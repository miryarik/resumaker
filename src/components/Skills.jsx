import TextField from "./TextField";

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
