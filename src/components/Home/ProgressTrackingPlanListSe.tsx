import { FunctionComponent } from "react";
import styles from "./ProgressTrackingPlanListSe.module.css";

export interface ProgressTrackingPlanListSeType {
  className?: string;
};

const ProgressTrackingPlanListSe: FunctionComponent<
  ProgressTrackingPlanListSeType
> = ({ className = "" }) => {
  return (
    <div className={[styles.progressTrackingPlanListSe, className].join(" ")}>
      <div className={styles.progressTrackingPlanListSeChild} />
      <img className={styles.vectorIcon} alt="" src="/vector-5.svg" />
      <div className={styles.frameParent}>
        <div className={styles.starParent}>
          <img className={styles.frameChild} alt="" src="/star-10-4.svg" />
          <div className={styles.ultraPlan}>Ultra Plan</div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.monthWrapper}>
            <div className={styles.month}>$24,99/month</div>
          </div>
          <img className={styles.ultraStarIcon} alt="" src="/star-11-4.svg" />
        </div>
        <div className={styles.theUltraPlanIsOurTopTierWrapper}>
          <div className={styles.theUltraPlan}>
            The Ultra Plan is our top-tier offering, combining all Metal
            features with the highest transaction limits, concierge services,
            and VIP experiences. The ultimate choice for individuals seeking
            unparalleled banking luxury and exclusivity.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingPlanListSe;
