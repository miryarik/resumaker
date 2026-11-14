import { useRef, useState } from "react";
import Collapse from "./Collapse";
import { PlusIcon, TrashIcon } from "./Icons";
import { blankEntry } from "../lib/resumeData";
import styles from "../styles/Card.module.css";

// A list of removable cards (education, experience, projects) with an
// add button. Newly added cards animate open, deleted ones collapse away.
const EntryList = ({ section, items, setItems, addLabel, renderFields }) => {
    const [freshIds, setFreshIds] = useState(() => new Set());
    const [leavingIds, setLeavingIds] = useState(() => new Set());

    const remaining = items.length - leavingIds.size;

    function add() {
        const entry = blankEntry(section);
        setFreshIds((s) => new Set(s).add(entry.id));
        setItems((list) => [...list, entry]);
    }

    function startRemove(id) {
        if (remaining <= 1) return;
        setLeavingIds((s) => new Set(s).add(id));
    }

    function finishRemove(id) {
        setItems((list) => list.filter((e) => e.id !== id));
        setLeavingIds((s) => {
            const next = new Set(s);
            next.delete(id);
            return next;
        });
    }

    function finishAppear(id) {
        setFreshIds((s) => {
            const next = new Set(s);
            next.delete(id);
            return next;
        });
    }

    function update(id, field, value) {
        setItems((list) =>
            list.map((e) => (e.id === id ? { ...e, [field]: value } : e)),
        );
    }

    return (
        <>
            {items.map((item) => (
                <EntryCard
                    key={item.id}
                    appear={freshIds.has(item.id)}
                    leaving={leavingIds.has(item.id)}
                    onDelete={() => startRemove(item.id)}
                    onLeft={() => finishRemove(item.id)}
                    onAppeared={() => finishAppear(item.id)}
                >
                    {renderFields(item, (field) => (e) =>
                        update(item.id, field, e.target.value),
                    )}
                </EntryCard>
            ))}
            <button
                className={styles.addButton}
                onClick={add}
                aria-label={addLabel}
            >
                <PlusIcon />
            </button>
        </>
    );
};

function EntryCard({
    appear,
    leaving,
    onDelete,
    onLeft,
    onAppeared,
    children,
}) {
    const ref = useRef(null);

    function handleAppeared() {
        onAppeared();
        const el = ref.current;
        if (!el) return;
        el.scrollIntoView({ block: "nearest", behavior: "smooth" });
        el.querySelector("input, textarea")?.focus({ preventScroll: true });
    }

    return (
        <Collapse
            appear={appear}
            leaving={leaving}
            onLeft={onLeft}
            onAppeared={handleAppeared}
        >
            <div className={styles.entry} ref={ref}>
                <div className={styles.actions}>
                    <button
                        className={styles.deleteButton}
                        onClick={onDelete}
                        aria-label="Delete entry"
                    >
                        <TrashIcon />
                    </button>
                </div>
                {children}
            </div>
        </Collapse>
    );
}

export default EntryList;
