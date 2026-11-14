// Shape of a resume and helpers to create / validate one.
// Everything that is saved, exported or imported goes through `normalizeResume`
// so the rest of the app can trust the shape.

export const uid = () =>
    typeof crypto !== "undefined" && crypto.randomUUID
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2) + Date.now().toString(36);

const BASIC_FIELDS = [
    "fullName",
    "designation",
    "location",
    "phone",
    "email",
    "github",
    "linkedin",
    "summary",
];

const ENTRY_FIELDS = {
    educations: ["institute", "course", "from", "to", "score"],
    experience: ["company", "designation", "mode", "from", "to", "content"],
    projects: ["name", "tools", "link", "github", "content"],
};

const DEFAULT_SKILL_LABELS = ["Languages", "Tools & Technologies", "Concepts"];

export function blankEntry(section) {
    const entry = { id: uid() };
    for (const field of ENTRY_FIELDS[section]) entry[field] = "";
    return entry;
}

export function blankResume() {
    return {
        basic: Object.fromEntries(BASIC_FIELDS.map((f) => [f, ""])),
        educations: [blankEntry("educations")],
        skills: DEFAULT_SKILL_LABELS.map((label) => ({
            id: uid(),
            label,
            items: "",
        })),
        experience: [blankEntry("experience")],
        projects: [blankEntry("projects")],
    };
}

// Filled-in example that shows what goes where, used for new resumes.
export function sampleResume() {
    const withIds = (list) => list.map((item) => ({ id: uid(), ...item }));
    return {
        basic: {
            fullName: "Your Name",
            designation: "Your Designation",
            location: "City, Country",
            phone: "+00-0000-000-000",
            email: "you@example.com",
            github: "github.com/username",
            linkedin: "linkedin.com/in/username",
            summary:
                "A short 2-3 line summary of who you are, what you do and the kind of role you're looking for.",
        },
        educations: withIds([
            {
                institute: "Some University",
                course: "Your Degree",
                from: "mm-yyyy",
                to: "mm-yyyy",
                score: "x.x / 10",
            },
        ]),
        skills: withIds([
            { label: "Languages", items: "Language 1, Language 2, Language 3" },
            {
                label: "Tools & Technologies",
                items: "Tool 1, Tool 2, Framework 1",
            },
            { label: "Concepts", items: "Concept 1, Concept 2, Concept 3" },
        ]),
        experience: withIds([
            {
                company: "Some Company",
                designation: "Your Role",
                mode: "Remote",
                from: "mm-yyyy",
                to: "mm-yyyy",
                content:
                    "-> What you built or owned, and the impact it had.\n-> A measurable result, e.g. improved X by Y%.\n-> The tools or skills you used to do it.",
            },
        ]),
        projects: withIds([
            {
                name: "Project Name",
                tools: "Tool 1, Tool 2, Tool 3",
                link: "project-link.com",
                github: "github.com/username/project",
                content:
                    "-> What the project does, in one line.\n-> An interesting problem you solved while building it.",
            },
        ]),
    };
}

const str = (v) => (typeof v === "string" ? v : v == null ? "" : String(v));
const isObj = (v) => v !== null && typeof v === "object" && !Array.isArray(v);

function normalizeEntries(section, list) {
    const entries = (Array.isArray(list) ? list : [])
        .filter(isObj)
        .map((item) => {
            const entry = { id: str(item.id) || uid() };
            for (const field of ENTRY_FIELDS[section])
                entry[field] = str(item[field]);
            return entry;
        });
    return entries.length ? entries : [blankEntry(section)];
}

function normalizeSkills(list) {
    const skills = (Array.isArray(list) ? list : [])
        .filter(isObj)
        .map((s) => ({
            id: str(s.id) || uid(),
            label: str(s.label),
            items: str(s.items),
        }));
    return skills.length ? skills : blankResume().skills;
}

// Coerces any (possibly partial / hand-edited) object into a valid resume.
export function normalizeResume(raw) {
    const src = isObj(raw) ? raw : {};
    const basicSrc = isObj(src.basic) ? src.basic : {};

    // de-duplicate ids so React keys stay unique even for hand-edited files
    const seen = new Set();
    const dedupe = (entries) =>
        entries.map((e) => {
            if (seen.has(e.id)) e = { ...e, id: uid() };
            seen.add(e.id);
            return e;
        });

    return {
        basic: Object.fromEntries(
            BASIC_FIELDS.map((f) => [f, str(basicSrc[f])]),
        ),
        educations: dedupe(normalizeEntries("educations", src.educations)),
        skills: dedupe(normalizeSkills(src.skills)),
        experience: dedupe(normalizeEntries("experience", src.experience)),
        projects: dedupe(normalizeEntries("projects", src.projects)),
    };
}

export function looksLikeResume(raw) {
    return (
        isObj(raw) &&
        ["basic", "educations", "skills", "experience", "projects"].some(
            (k) => k in raw,
        )
    );
}

// ---- JSON export / import -------------------------------------------------

export const EXPORT_APP = "resumaker";
export const EXPORT_VERSION = 1;

export function toExportJSON(name, data) {
    // ids are internal, keep shared files clean
    const strip = (list) =>
        list.map((item) => {
            const copy = { ...item };
            delete copy.id;
            return copy;
        });
    return JSON.stringify(
        {
            app: EXPORT_APP,
            version: EXPORT_VERSION,
            name,
            exportedAt: new Date().toISOString(),
            resume: {
                basic: data.basic,
                educations: strip(data.educations),
                skills: strip(data.skills),
                experience: strip(data.experience),
                projects: strip(data.projects),
            },
        },
        null,
        2,
    );
}

// Returns { name, data } or throws an Error with a user-facing message.
export function parseImportJSON(text, fallbackName) {
    let parsed;
    try {
        parsed = JSON.parse(text);
    } catch {
        throw new Error("That file isn't valid JSON.");
    }

    // accept both our export wrapper and a bare resume object
    const body = isObj(parsed) && isObj(parsed.resume) ? parsed.resume : parsed;
    if (!looksLikeResume(body))
        throw new Error("That file doesn't look like a Resumaker resume.");

    const name =
        (isObj(parsed) && str(parsed.name).trim()) ||
        str(body.basic?.fullName).trim() ||
        fallbackName;

    return { name, data: normalizeResume(body) };
}

export function slugify(text) {
    return (
        text
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "") || "resume"
    );
}
