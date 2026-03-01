import styles from "../styles/ResumeHeading.module.css";
const ResumeHeading = ({ fullName, designation, contactInfo, linkInfo }) => {
    return (
        <div className={styles.Heading}>
            <h2 className={styles.FullName}>{fullName}</h2>
            <h3 className={styles.Designation}>{designation}</h3>
            <HeadingInfo infoList={contactInfo} />
            <HeadingInfo infoList={linkInfo} />
        </div>
    );
};

// sub components
const HeadingInfo = ({ infoList }) => {
    const linkMode = !!infoList[0].label;

    return (
        <div className={styles.HeadingInfo}>
            {infoList.map(
                (item, idx) =>
                    item.value && (
                        <div
                            className={styles.HeadingInfoItem}
                            key={item.value}
                        >
                            {item.icon}

                            {linkMode ? (
                                <a href={"https://" + item.value}>
                                    {item.label}
                                </a>
                            ) : (
                                item.value
                            )}

                            {infoList[idx + 1]?.value &&
                                idx != infoList.length - 1 && <Separator />}
                        </div>
                    ),
            )}
        </div>
    );
};

function Separator() {
    return (
        <span
            style={{
                margin: "0 4px",
            }}
        >
            {" | "}
        </span>
    );
}

export default ResumeHeading;
