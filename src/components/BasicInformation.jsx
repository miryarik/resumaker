import InputField from "./InputField";
import InputGroup from "./InputGroup";
import TextField from "./TextField";

const BasicInformation = ({ state, isActive }) => {
    return (
        <>
            {isActive && (
                <div className="input-basic">
                    <h3>Basic Information</h3>
                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"Full Name"}
                            id={"name"}
                            placeholder={"John Doe"}
                            value={state.fullName.value}
                            setValue={state.fullName.set}
                        />
                        <InputField
                            type={"text"}
                            label={"Designation"}
                            id={"designation"}
                            placeholder={"Senior Web Engineer"}
                            value={state.designation.value}
                            setValue={state.designation.set}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"Location"}
                            id={"location"}
                            placeholder={"Silicon Valley"}
                            value={state.location.value}
                            setValue={state.location.set}
                        />
                        <InputField
                            type={"tel"}
                            label={"Phone"}
                            id={"phone"}
                            placeholder={"+91-XXXX-XXXX-XX"}
                            value={state.phone.value}
                            setValue={state.phone.set}
                        />
                        <InputField
                            type={"email"}
                            label={"Email"}
                            id={"email"}
                            placeholder={"johnny@company.com"}
                            value={state.email.value}
                            setValue={state.email.set}
                        />
                    </InputGroup>
                    <InputGroup>
                        <InputField
                            type={"text"}
                            label={"GitHub"}
                            id={"github"}
                            placeholder={"github.com/john"}
                            value={state.github.value}
                            setValue={state.github.set}
                        />
                        <InputField
                            type={"text"}
                            label={"LinkedIn"}
                            id={"linkedin"}
                            placeholder={"linkedin.com/in/john"}
                            value={state.linkedin.value}
                            setValue={state.linkedin.set}
                        />
                    </InputGroup>
                    <TextField
                        label={"Summary"}
                        id={"summary"}
                        placeholder={
                            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime optio maiores hic aut est consequatur eius quisquam iusto blanditiis voluptatem."
                        }
                        value={state.summary.value}
                        setValue={state.summary.set}
                    />
                </div>
            )}
        </>
    );
};

export default BasicInformation;
