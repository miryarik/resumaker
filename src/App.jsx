import "./App.css";
import { useMemo, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import BasicInformation from "./components/BasicInformation";
import { Education } from "./components/Education";
import Skills from "./components/Skills";
import { Experience } from "./components/Experience";
import Projects from "./components/Projects";
import { EyeIcon, PencilIcon } from "./components/Icons";
import useResumeLibrary from "./lib/useResumeLibrary";
import useMediaQuery, { MOBILE_QUERY } from "./lib/useMediaQuery";

const inputTabs = ["basic", "education", "skills", "experience", "projects"];

function App() {
    const library = useResumeLibrary();
    const { active, updateSection } = library;
    const data = active.data;

    const [activeTab, setActiveTab] = useState("basic");
    const [inputsOpen, setInputsOpen] = useState(true);
    const [mobileView, setMobileView] = useState("edit");
    const isMobile = useMediaQuery(MOBILE_QUERY);
    const scrollRef = useRef(null);
    const asideRef = useRef(null);
    // inner width is frozen while the aside slides so fields don't reflow
    const [frozenWidth, setFrozenWidth] = useState(null);

    function toggleInputs() {
        if (inputsOpen) setFrozenWidth(asideRef.current.clientWidth);
        setInputsOpen((o) => !o);
    }

    // stable per-section setters, accept a value or an updater fn
    const set = useMemo(() => {
        const make = (section) => (value) => updateSection(section, value);
        return {
            basic: make("basic"),
            educations: make("educations"),
            skills: make("skills"),
            experience: make("experience"),
            projects: make("projects"),
        };
    }, [updateSection]);

    function selectTab(tab) {
        setActiveTab(tab);
        scrollRef.current?.scrollTo({ top: 0 });
    }

    const editorHidden = isMobile ? mobileView !== "edit" : !inputsOpen;

    return (
        <>
            <Navbar
                toggleInputs={toggleInputs}
                inputsOpen={inputsOpen}
                library={library}
            />
            <main data-view={mobileView}>
                <aside
                    id="inputs-panel"
                    className={`inputs ${inputsOpen ? "" : "collapsed"}`}
                    inert={editorHidden}
                    ref={asideRef}
                    onTransitionEnd={(e) => {
                        if (
                            e.target === e.currentTarget &&
                            e.propertyName === "width" &&
                            inputsOpen
                        )
                            setFrozenWidth(null);
                    }}
                >
                    <div
                        className="inputs-inner"
                        ref={scrollRef}
                        style={
                            frozenWidth != null && !isMobile
                                ? { width: frozenWidth }
                                : undefined
                        }
                    >
                        <div className="input-tabs" role="tablist">
                            {inputTabs.map((tab) => (
                                <button
                                    key={tab}
                                    role="tab"
                                    aria-selected={activeTab == tab}
                                    className={activeTab == tab ? "active" : ""}
                                    onClick={() => selectTab(tab)}
                                >
                                    {tab[0].toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* keyed so switching tab or resume resets entry
                            animation state and fades the new content in */}
                        <div
                            className="input-fields"
                            key={`${active.id}:${activeTab}`}
                        >
                            {activeTab == "basic" && (
                                <BasicInformation
                                    basic={data.basic}
                                    setBasic={set.basic}
                                />
                            )}
                            {activeTab == "education" && (
                                <Education
                                    educations={data.educations}
                                    setEducations={set.educations}
                                />
                            )}
                            {activeTab == "skills" && (
                                <Skills
                                    skills={data.skills}
                                    setSkills={set.skills}
                                />
                            )}
                            {activeTab == "experience" && (
                                <Experience
                                    experience={data.experience}
                                    setExperience={set.experience}
                                />
                            )}
                            {activeTab == "projects" && (
                                <Projects
                                    projects={data.projects}
                                    setProjects={set.projects}
                                />
                            )}
                        </div>
                    </div>
                </aside>
                <section className="preview">
                    <Resume
                        data={data}
                        hidden={isMobile && mobileView !== "preview"}
                    />
                </section>
            </main>

            <div className="view-switch" role="tablist" aria-label="View">
                <button
                    role="tab"
                    aria-selected={mobileView == "edit"}
                    className={mobileView == "edit" ? "active" : ""}
                    onClick={() => setMobileView("edit")}
                >
                    <PencilIcon size={16} /> Edit
                </button>
                <button
                    role="tab"
                    aria-selected={mobileView == "preview"}
                    className={mobileView == "preview" ? "active" : ""}
                    onClick={() => setMobileView("preview")}
                >
                    <EyeIcon size={16} /> Preview
                </button>
            </div>
        </>
    );
}

export default App;
