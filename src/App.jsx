import "./App.css";
import InputField from "./components/InputField";
import InputGroup from "./components/InputGroup";
import { Navbar } from "./components/Navbar";
import Resume from "./components/Resume";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <div className="inputs">
                    <InputGroup>
                        <InputField
                            type={"text"}
                            placeholder={"John Doe"}
                            label={"Full Name"}
                            id={"name"}
                        />
                        <InputField
                            type={"text"}
                            placeholder={"Senior Web Engineer"}
                            label={"Designation"}
                            id={"designation"}
                        />
                    </InputGroup>
                </div>
                <Resume />
            </main>
        </>
    );
}

export default App;
