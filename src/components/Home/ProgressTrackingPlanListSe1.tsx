import { FunctionComponent } from "react";
import styles from "./ProgressTrackingPlanListSe1.module.css";

export interface ProgressTrackingPlanListSe1Type {
  className?: string;
};

const ProgressTrackingPlanListSe1: FunctionComponent<
  ProgressTrackingPlanListSe1Type
> = ({ className = "" }) => {
  return (
    <div className={[styles.progressTrackingPlanListSe, className].join(" ")}>
      <div className={styles.progressTrackingPlanListSeChild} />
      <img
        className={styles.progressTrackingPlanIconsS}
        alt=""
        src="/vector-4.svg"
      />
      <div className={styles.progressTrackingPlanDetails}>
        <div className={styles.progressTrackingPlanFeature}>
          <img
            className={styles.progressTrackingPlanFeature1}
            alt=""
            src="/star-10-3.svg"
          />
          <h1 className={styles.ironPlan}>Iron Plan</h1>
        </div>
        <div className={styles.progressTrackingPlanPrices}>
          <div className={styles.progressTrackingPlanPriceV}>
            <div className={styles.month}>$15,99/month</div>
            <img className={styles.monthStarIcon} alt="" src="/star-11-3.svg" />
          </div>
        </div>
        <div className={styles.ultraDescription}>
          <div className={styles.theStandardPlan}>
            The Standard Plan offers essential banking services with no monthly
            fees. Enjoy free online transfers, basic customer support, and
            access to a wide network of ATMs. Ideal for everyday banking needs.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingPlanListSe1;
