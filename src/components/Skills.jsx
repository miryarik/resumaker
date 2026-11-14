import TextField from "./TextField";

const placeholders = [
    "JavaScript, Ruby, Java, SQL",
    "Vite, React.js, Jest, Git",
    "Test Driven Development, Data Structures, Algorithms",
];

const Skills = ({ skills, setSkills }) => {
    return (
        <div className="input-skills">
            <h3>Skills and Technologies</h3>
            {skills.map((section, idx) => (
                <TextField
                    rows={2}
                    key={section.id}
                    label={section.label}
                    value={section.items}
                    placeholder={placeholders[idx]}
                    onChange={(e) => {
                        const items = e.target.value;
                        setSkills((list) =>
                            list.map((s) =>
                                s.id === section.id ? { ...s, items } : s,
                            ),
                        );
                    }}
                />
            ))}
        </div>
    );
};

export default Skills;
