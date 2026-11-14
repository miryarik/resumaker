import { useSyncExternalStore } from "react";

export default function useMediaQuery(query) {
    return useSyncExternalStore(
        (onChange) => {
            const mql = window.matchMedia(query);
            mql.addEventListener("change", onChange);
            return () => mql.removeEventListener("change", onChange);
        },
        () => window.matchMedia(query).matches,
    );
}

// keep in sync with the breakpoint used in the CSS files
export const MOBILE_QUERY = "(max-width: 900px)";
