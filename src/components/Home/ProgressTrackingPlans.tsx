import { FunctionComponent } from "react";
import styles from "./ProgressTrackingPlans.module.css";

export interface ProgressTrackingPlansType {
  className?: string;
};

const ProgressTrackingPlans: FunctionComponent<ProgressTrackingPlansType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.progressTrackingPlans, className].join(" ")}>
      <div className={styles.progressTrackingPlanList}>
        <div className={styles.progressTrackingPlanListChild} />
        <img
          className={styles.progressTrackingPlanIcons}
          alt=""
          src="/vector-1.svg"
        />
        <div className={styles.progressTrackingPlanDetails}>
          <div className={styles.progressTrackingPlanFeature}>
            <div className={styles.progressTrackingPlanFeature1}>
              <img
                className={styles.progressTrackingPlanFeature2}
                loading="lazy"
                alt=""
                src="/star-10.svg"
              />
              <div className={styles.standart}>Standart</div>
            </div>
          </div>
          <div className={styles.progressTrackingPlanPrices}>
            <div className={styles.free}>Free</div>
            <img
              className={styles.progressTrackingPlanPriceS}
              loading="lazy"
              alt=""
              src="/star-11.svg"
            />
          </div>
          <div className={styles.progressTrackingPlanDescrip}>
            <div className={styles.theStandardPlan}>
              The Standard Plan offers essential banking services with no
              monthly fees. Enjoy free online transfers, basic customer support,
              and access to a wide network of ATMs. Ideal for everyday banking
              needs.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.progressTrackingPlanList1}>
        <div className={styles.progressTrackingPlanListItem} />
        <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
        <img
          className={styles.progressTrackingPlanListInner}
          alt=""
          src="/star-111.svg"
        />
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/star-10-1.svg" />
              <h1 className={styles.standart1}>Plus</h1>
            </div>
          </div>
          <div className={styles.freeParent}>
            <div className={styles.free1}>$4,99/month</div>
            <img className={styles.frameItem} alt="" src="/star-111.svg" />
          </div>
          <div className={styles.theStandardPlanOffersEssenWrapper}>
            <div className={styles.theStandardPlan1}>
              The Plus Plan includes all Standard features with added benefits
              such as higher transaction limits, priority customer support.
              Perfect for those seeking enhanced banking convenience.
            </div>
          </div>
        </div>
      </div>
      <div className={styles.progressTrackingPlanList2}>
        <div className={styles.rectangleDiv} />
        <img className={styles.vectorIcon1} alt="" src="/vector-3.svg" />
        <img className={styles.starIcon} alt="" src="/star-111.svg" />
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.starGroup}>
              <img className={styles.frameInner} alt="" src="/star-10-2.svg" />
              <h1 className={styles.standart2}>{`Premium `}</h1>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.freeGroup}>
              <div className={styles.free2}>$8,99/month</div>
              <img
                className={styles.progressTrackingPlanPriceS1}
                alt=""
                src="/star-11-2.svg"
              />
            </div>
          </div>
          <div className={styles.theStandardPlan2}>
            The Premium Plan provides all Plus features along with exclusive
            perks like lower foreign transaction fees, travel insurance, and
            cashback rewards on purchases. Tailored for frequent travelers and
            high spenders.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackingPlans;
