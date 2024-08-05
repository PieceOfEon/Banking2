import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";

export interface FrameComponent2Type {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.featureOneContainerParent, className].join(" ")}>
      <div className={styles.featureOneContainer}>
        <div className={styles.featureOneContent}>
          <FrameComponent3
            unlockLifesJoy="Unlock Life’s Joy "
            withYour="with your "
            group19="/group-19@2x.png"
          />
          <div className={styles.withEverySwipe}>
            With every swipe, you’re not just making a transaction – you’re
            enhancing your lifestyle. Discover the freedom, security, and
            benefits that come with using our card. Live your best life today!
          </div>
        </div>
        
        <div className={styles.pricingContentWrapper}>
          <div className={styles.pricingContent}>
            <button className={styles.component1}>
              <a href="/sign-in" className={styles.pickAPlan}>Get Started</a>
            </button>
            <div
              className={styles.pricingSubheading}
            >
              <b className={styles.howItWorks}>How it works</b>
              <div className={styles.pricingSubheadingIcon}>
                <img
                  className={styles.pricingSubheadingIconImage}
                  alt=""
                  src="/pricing-subheading-icon-image.svg"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FrameComponent2;
