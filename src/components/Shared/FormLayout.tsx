import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormLayout.module.css";

export type FormLayoutType = {
  className?: string;
  fullName?: string;
  enterYourFullNamePlacehol?: string;

  /** Style props */
  propHeight?: CSSProperties["height"];
};

const FormLayout: FunctionComponent<FormLayoutType> = ({
  className = "",
  fullName,
  enterYourFullNamePlacehol,
  propHeight,
}) => {
  const formLayoutStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <section
      className={[styles.formLayout, className].join(" ")}
      style={formLayoutStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.fullNameWrapper}>
          <a className={styles.fullName}>{fullName}</a>
        </div>
        <div className={styles.enterYourFullNameWrapper}>
          <input
            className={styles.enterYourFull}
            placeholder={enterYourFullNamePlacehol}
            type="text"
          />
        </div>
      </div>
    </section>
  );
};

export default FormLayout;
