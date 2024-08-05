import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export interface FrameComponent3Type {
  className?: string;
  unlockLifesJoy?: string;
  withYour?: string;
  group19?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
  unlockLifesJoy,
  withYour,
  group19,
}) => {
  return (
    <div className={[styles.unlockLifesJoyWithYourParent, className].join(" ")}>
      <h1 className={styles.unlockLifesJoyContainer}>
        <p className={styles.unlockLifesJoy}>{unlockLifesJoy}</p>
        <p className={styles.withYour}>{withYour}</p>
      </h1>
      <div className={styles.featureOneCard}>
        <img className={styles.featureOneCardChild} alt="" src={group19} />
        <h1 className={styles.card}>Card</h1>
      </div>
    </div>
  );
};

export default FrameComponent3;
