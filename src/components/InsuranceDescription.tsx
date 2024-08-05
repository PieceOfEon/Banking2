import { FunctionComponent } from "react";
import styles from "./InsuranceDescription.module.css";

export interface InsuranceDescriptionType {
  className?: string;
};

const InsuranceDescription: FunctionComponent<InsuranceDescriptionType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.insuranceDescription, className].join(" ")}>
      <div className={styles.veridionInsurance}>
        <div className={styles.veridionContent}>
          <div className={styles.protectWhatMatters}>
            Protect what matters most with Veridion Bank’s comprehensive
            insurance products. We partner with leading insurers to offer you
            reliable coverage and peace of mind.
          </div>
          <div className={styles.insuranceHighlight}>
            <h1 className={styles.insurance}>Insurance</h1>
            <button className={styles.component1}>
              <b className={styles.pickAPlan}>Get Insurance</b>
            </button>
          </div>
        </div>
      </div>
      <img
        className={styles.insuranceIcon}
        loading="lazy"
        alt=""
        src="/insurance1.svg"
      />
    </div>
  );
};

export default InsuranceDescription;
