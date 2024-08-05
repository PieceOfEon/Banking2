import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./SubmitButton.module.css";

export interface SubmitButtonType {
  className?: string;
  singUp?: string;
  vector?: string;

  /** Style props */
  propGap?: CSSProperties["gap"];
};

const SubmitButton: FunctionComponent<SubmitButtonType> = ({
  className = "",
  singUp,
  vector,
  propGap,
}) => {
  const submitButtonStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  return (
    <button
      className={[styles.submitButton, className].join(" ")}
      style={submitButtonStyle}
    >
      <b className={styles.singUp}>{singUp}</b>
      <div className={styles.buttonIcon}>
        <img className={styles.vectorIcon} alt="" src={vector} />
      </div>
    </button>
  );
};

export default SubmitButton;
