import { FunctionComponent } from "react";
import styles from "./ContentColumns.module.css";

export interface ContentColumnsType {
  className?: string;
};

const ContentColumns: FunctionComponent<ContentColumnsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.contentColumns, className].join(" ")}>
      <div className={styles.contentColumnsInner}>
        <div className={styles.frameParent}>
          <div className={styles.vectorParent}>
            <img
              className={styles.frameChild}
              loading="lazy"
              alt=""
              src="/line-34.svg"
            />
            <h1 className={styles.personalizedBusinessSupportContainer}>
              <span>{`Personalized `}</span>
              <span className={styles.businessSupport}>Business Support</span>
            </h1>
          </div>
          <div className={styles.experienceUnparalleledSuppor}>
            Experience unparalleled support with our dedicated business
            advisors. We offer personalized financial advice and strategic
            planning to help you navigate the complexities of running a
            business. From cash flow management to growth strategies, our
            experts are here to support your success.
          </div>
        </div>
      </div>
      <img
        className={styles.keysPercentCollageIcon}
        loading="lazy"
        alt=""
        src="/keys-percent-collage.svg"
      />
    </div>
  );
};

export default ContentColumns;
