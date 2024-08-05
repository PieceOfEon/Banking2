import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./PrivacyContent.module.css";

export interface PrivacyContentType {
  className?: string;
  frame58?: string;
  informationSharing?: string;
  weMayShareYourInformation?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const PrivacyContent: FunctionComponent<PrivacyContentType> = ({
  className = "",
  frame58,
  informationSharing,
  weMayShareYourInformation,
  propPadding,
}) => {
  const privacyContentStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section
      className={[styles.privacyContent, className].join(" ")}
      style={privacyContentStyle}
    >
      <div className={styles.frameParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={frame58}
        />
        <div className={styles.frameWrapper}>
          <div className={styles.informationSharingParent}>
            <h1 className={styles.informationSharing}>{informationSharing}</h1>
            <div className={styles.weMayShare}>{weMayShareYourInformation}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyContent;
