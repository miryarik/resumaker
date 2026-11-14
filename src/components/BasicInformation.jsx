import InputField from "./InputField";
import InputGroup from "./InputGroup";
import TextField from "./TextField";

const BasicInformation = ({ basic, setBasic }) => {
    const bind = (field) => ({
        value: basic[field],
        onChange: (e) => {
            const value = e.target.value;
            setBasic((b) => ({ ...b, [field]: value }));
        },
    });

    return (
        <div className="input-basic">
            <h3>Basic Information</h3>
            <InputGroup>
                <InputField
                    type={"text"}
                    label={"Full Name"}
                    id={"name"}
                    placeholder={"John Doe"}
                    {...bind("fullName")}
                />
                <InputField
                    type={"text"}
                    label={"Designation"}
                    id={"designation"}
                    placeholder={"Senior Web Engineer"}
                    {...bind("designation")}
                />
            </InputGroup>
            <InputGroup>
                <InputField
                    type={"text"}
                    label={"Location"}
                    id={"location"}
                    placeholder={"Silicon Valley"}
                    {...bind("location")}
                />
                <InputField
                    type={"tel"}
                    label={"Phone"}
                    id={"phone"}
                    placeholder={"+91-XXXX-XXXX-XX"}
                    {...bind("phone")}
                />
                <InputField
                    type={"email"}
                    label={"Email"}
                    id={"email"}
                    placeholder={"johnny@company.com"}
                    {...bind("email")}
                />
            </InputGroup>
            <InputGroup>
                <InputField
                    type={"text"}
                    label={"GitHub"}
                    id={"github"}
                    placeholder={"github.com/john"}
                    {...bind("github")}
                />
                <InputField
                    type={"text"}
                    label={"LinkedIn"}
                    id={"linkedin"}
                    placeholder={"linkedin.com/in/john"}
                    {...bind("linkedin")}
                />
            </InputGroup>
            <TextField
                label={"Summary"}
                id={"summary"}
                placeholder={
                    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio maiores hic aut est consequatur eius quisquam iusto blanditiis voluptatem."
                }
                {...bind("summary")}
            />
        </div>
    );
};

export default BasicInformation;
