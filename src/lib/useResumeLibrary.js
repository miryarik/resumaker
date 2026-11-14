import { useCallback, useEffect, useState } from "react";
import { normalizeResume, sampleResume, uid } from "./resumeData";

const STORAGE_KEY = "resumaker.library.v1";

function makeRecord(name, data = sampleResume()) {
    return { id: uid(), name, updatedAt: Date.now(), data };
}

function nextUntitledName(resumes) {
    const taken = new Set(resumes.map((r) => r.name));
    if (!taken.has("Untitled resume")) return "Untitled resume";
    let n = 2;
    while (taken.has(`Untitled resume ${n}`)) n++;
    return `Untitled resume ${n}`;
}

function loadLibrary() {
    try {
        const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
        if (raw && Array.isArray(raw.resumes) && raw.resumes.length) {
            const resumes = raw.resumes.map((r) => ({
                id: typeof r.id === "string" ? r.id : uid(),
                name: typeof r.name === "string" ? r.name : "Untitled resume",
                updatedAt: Number(r.updatedAt) || Date.now(),
                data: normalizeResume(r.data),
            }));
            const activeId = resumes.some((r) => r.id === raw.activeId)
                ? raw.activeId
                : resumes[0].id;
            return { resumes, activeId };
        }
    } catch {
        // corrupt or unavailable storage, start fresh
    }
    const first = makeRecord("Untitled resume");
    return { resumes: [first], activeId: first.id };
}

// Holds every saved resume and keeps localStorage in sync.
export default function useResumeLibrary() {
    const [library, setLibrary] = useState(loadLibrary);
    const [storageError, setStorageError] = useState(false);

    // debounced save, flushed when the page is hidden / closed
    useEffect(() => {
        const save = () => {
            try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(library));
                setStorageError(false);
            } catch {
                // quota exceeded / private mode: keep working in memory
                setStorageError(true);
            }
        };
        const timer = setTimeout(save, 300);
        window.addEventListener("pagehide", save);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("pagehide", save);
        };
    }, [library]);

    const active =
        library.resumes.find((r) => r.id === library.activeId) ??
        library.resumes[0];

    // patch one top-level section of the active resume
    const updateSection = useCallback((section, value) => {
        setLibrary((lib) => ({
            ...lib,
            resumes: lib.resumes.map((r) =>
                r.id === lib.activeId
                    ? {
                          ...r,
                          updatedAt: Date.now(),
                          data: {
                              ...r.data,
                              [section]:
                                  typeof value === "function"
                                      ? value(r.data[section])
                                      : value,
                          },
                      }
                    : r,
            ),
        }));
    }, []);

    const selectResume = useCallback((id) => {
        setLibrary((lib) => ({ ...lib, activeId: id }));
    }, []);

    // returns the new resume's id
    const createResume = useCallback((name, data) => {
        const id = uid();
        setLibrary((lib) => {
            const record = {
                ...makeRecord(name ?? nextUntitledName(lib.resumes), data),
                id,
            };
            return { resumes: [record, ...lib.resumes], activeId: id };
        });
        return id;
    }, []);

    const renameResume = useCallback((id, name) => {
        setLibrary((lib) => ({
            ...lib,
            resumes: lib.resumes.map((r) =>
                r.id === id ? { ...r, name, updatedAt: Date.now() } : r,
            ),
        }));
    }, []);

    const deleteResume = useCallback((id) => {
        setLibrary((lib) => {
            const resumes = lib.resumes.filter((r) => r.id !== id);
            // always keep at least one resume around
            if (!resumes.length) {
                const fresh = makeRecord("Untitled resume");
                return { resumes: [fresh], activeId: fresh.id };
            }
            const activeId =
                lib.activeId === id ? resumes[0].id : lib.activeId;
            return { resumes, activeId };
        });
    }, []);

    return {
        resumes: library.resumes,
        active,
        storageError,
        updateSection,
        selectResume,
        createResume,
        renameResume,
        deleteResume,
    };
}
