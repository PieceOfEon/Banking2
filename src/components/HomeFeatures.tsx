import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./HomeFeatures.module.css";

export interface HomeFeaturesType {
  className?: string;
};

const HomeFeatures: FunctionComponent<HomeFeaturesType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onPricingSubheadingContainerClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className={[styles.homeFeatures, className].join(" ")}>
      <div className={styles.homeFeaturesContent}>
        <div className={styles.home01}>
          <img src="/Groupfull.svg"></img>
        </div>
        <div className={styles.pricingContentWrapper}>
          <div className={styles.pricingContent}>
            <button className={styles.component1}>
              <b className={styles.pickAPlan}>Get Started</b>
            </button>
            <div
              className={styles.pricingSubheading}
              onClick={onPricingSubheadingContainerClick}
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

export default HomeFeatures;
