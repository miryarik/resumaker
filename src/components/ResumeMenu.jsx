import { useEffect, useRef, useState } from "react";
import Collapse from "./Collapse";
import {
    ChevronDownIcon,
    DownloadIcon,
    FileIcon,
    PlusIcon,
    TrashIcon,
    UploadIcon,
} from "./Icons";
import { parseImportJSON, slugify, toExportJSON } from "../lib/resumeData";
import styles from "../styles/ResumeMenu.module.css";

const timeAgo = (ts) => {
    const s = Math.round((Date.now() - ts) / 1000);
    if (s < 60) return "just now";
    const m = Math.round(s / 60);
    if (m < 60) return `${m}m ago`;
    const h = Math.round(m / 60);
    if (h < 24) return `${h}h ago`;
    const d = Math.round(h / 24);
    if (d < 30) return `${d}d ago`;
    return new Date(ts).toLocaleDateString();
};

const ResumeMenu = ({ library }) => {
    const {
        resumes,
        active,
        storageError,
        selectResume,
        createResume,
        renameResume,
        deleteResume,
    } = library;

    const [open, setOpen] = useState(false);
    const [leavingIds, setLeavingIds] = useState(() => new Set());
    const [freshIds, setFreshIds] = useState(() => new Set());
    const [notice, setNotice] = useState(null); // { type: "error" | "ok", text }
    const rootRef = useRef(null);
    const fileRef = useRef(null);

    // new / imported resumes animate into the list
    function create(name, data) {
        const id = createResume(name, data);
        setFreshIds((s) => new Set(s).add(id));
    }

    // close on outside click / Escape
    useEffect(() => {
        if (!open) return;
        const onPointer = (e) => {
            if (!rootRef.current?.contains(e.target)) setOpen(false);
        };
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        document.addEventListener("pointerdown", onPointer);
        document.addEventListener("keydown", onKey);
        return () => {
            document.removeEventListener("pointerdown", onPointer);
            document.removeEventListener("keydown", onKey);
        };
    }, [open]);

    useEffect(() => {
        if (!notice) return;
        const t = setTimeout(() => setNotice(null), 4000);
        return () => clearTimeout(t);
    }, [notice]);

    function exportActive() {
        const blob = new Blob([toExportJSON(active.name, active.data)], {
            type: "application/json",
        });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `${slugify(active.name)}.resumaker.json`;
        a.click();
        URL.revokeObjectURL(url);
        setNotice({ type: "ok", text: `Exported “${active.name}”.` });
    }

    async function importFile(e) {
        const file = e.target.files?.[0];
        e.target.value = ""; // allow re-importing the same file
        if (!file) return;
        try {
            const fallback = file.name.replace(/(\.resumaker)?\.json$/i, "");
            const { name, data } = parseImportJSON(await file.text(), fallback);
            create(name, data);
            setNotice({ type: "ok", text: `Imported “${name}”.` });
        } catch (err) {
            setNotice({ type: "error", text: err.message });
        }
    }

    function requestDelete(resume) {
        if (!window.confirm(`Delete “${resume.name}”? This can't be undone.`))
            return;
        setLeavingIds((s) => new Set(s).add(resume.id));
    }

    function finishDelete(id) {
        deleteResume(id);
        setLeavingIds((s) => {
            const next = new Set(s);
            next.delete(id);
            return next;
        });
    }

    const dropFresh = (id) =>
        setFreshIds((s) => {
            const next = new Set(s);
            next.delete(id);
            return next;
        });

    return (
        <div className={styles.ResumeMenu} ref={rootRef}>
            <button
                className={styles.trigger}
                onClick={() => setOpen((o) => !o)}
                aria-expanded={open}
                aria-haspopup="dialog"
            >
                <FileIcon size={16} />
                <span className={styles.triggerName}>{active.name}</span>
                <ChevronDownIcon
                    size={16}
                    className={`${styles.chevron} ${open ? styles.flipped : ""}`}
                />
            </button>

            <div
                className={`${styles.panel} ${open ? styles.open : ""}`}
                role="dialog"
                aria-label="Saved resumes"
                inert={!open}
            >
                <label className={styles.nameField}>
                    <span>Resume name</span>
                    <input
                        value={active.name}
                        onChange={(e) => renameResume(active.id, e.target.value)}
                        onBlur={(e) =>
                            !e.target.value.trim() &&
                            renameResume(active.id, "Untitled resume")
                        }
                        maxLength={80}
                    />
                </label>

                <div className={styles.actions}>
                    <button onClick={() => create()}>
                        <PlusIcon size={16} /> New
                    </button>
                    <button onClick={() => fileRef.current?.click()}>
                        <UploadIcon size={16} /> Import
                    </button>
                    <button onClick={exportActive}>
                        <DownloadIcon size={16} /> Export
                    </button>
                    <input
                        ref={fileRef}
                        type="file"
                        accept="application/json,.json"
                        onChange={importFile}
                        hidden
                    />
                </div>

                {(notice || storageError) && (
                    <p
                        className={`${styles.notice} ${
                            notice?.type === "ok" ? styles.ok : styles.error
                        }`}
                        role="status"
                    >
                        {notice?.text ??
                            "Browser storage is unavailable, changes won't be saved."}
                    </p>
                )}

                <h4 className={styles.listHeading}>
                    Saved resumes <span>{resumes.length}</span>
                </h4>
                <ul className={styles.list}>
                    {resumes.map((resume) => (
                        <li key={resume.id}>
                            <Collapse
                                appear={freshIds.has(resume.id)}
                                onAppeared={() => dropFresh(resume.id)}
                                leaving={leavingIds.has(resume.id)}
                                onLeft={() => finishDelete(resume.id)}
                            >
                                <div
                                    className={`${styles.row} ${
                                        resume.id === active.id
                                            ? styles.current
                                            : ""
                                    }`}
                                >
                                    <button
                                        className={styles.select}
                                        onClick={() => selectResume(resume.id)}
                                        aria-current={resume.id === active.id}
                                    >
                                        <span className={styles.rowName}>
                                            {resume.name}
                                        </span>
                                        <span className={styles.rowMeta}>
                                            {resume.data.basic.fullName ||
                                                "No name yet"}{" "}
                                            · {timeAgo(resume.updatedAt)}
                                        </span>
                                    </button>
                                    <button
                                        className={styles.delete}
                                        onClick={() => requestDelete(resume)}
                                        aria-label={`Delete ${resume.name}`}
                                        title="Delete resume"
                                    >
                                        <TrashIcon size={16} />
                                    </button>
                                </div>
                            </Collapse>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ResumeMenu;
