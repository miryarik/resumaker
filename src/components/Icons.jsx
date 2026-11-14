// Lucide-style stroke icons used across the editor UI.
const Icon = ({ children, size = 24, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        {...props}
    >
        {children}
    </svg>
);

export const TrashIcon = (props) => (
    <Icon {...props}>
        <path d="M10 11v6" />
        <path d="M14 11v6" />
        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
        <path d="M3 6h18" />
        <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </Icon>
);

export const PlusIcon = (props) => (
    <Icon {...props}>
        <path d="M5 12h14" />
        <path d="M12 5v14" />
    </Icon>
);

export const ChevronDownIcon = (props) => (
    <Icon {...props}>
        <path d="m6 9 6 6 6-6" />
    </Icon>
);

export const FileIcon = (props) => (
    <Icon {...props}>
        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
        <path d="M14 2v4a2 2 0 0 0 2 2h4" />
        <path d="M10 13H8" />
        <path d="M16 17H8" />
        <path d="M16 13h-2" />
    </Icon>
);

export const UploadIcon = (props) => (
    <Icon {...props}>
        <path d="M12 3v12" />
        <path d="m17 8-5-5-5 5" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </Icon>
);

export const DownloadIcon = (props) => (
    <Icon {...props}>
        <path d="M12 15V3" />
        <path d="m7 10 5 5 5-5" />
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    </Icon>
);

export const PencilIcon = (props) => (
    <Icon {...props}>
        <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" />
    </Icon>
);

export const EyeIcon = (props) => (
    <Icon {...props}>
        <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
        <circle cx="12" cy="12" r="3" />
    </Icon>
);

export const PanelLeftIcon = (props) => (
    <Icon {...props}>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18" />
    </Icon>
);
