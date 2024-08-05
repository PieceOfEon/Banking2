import { FunctionComponent } from "react";
import styles from "./BottomFeatures.module.css";

export interface BottomFeaturesType {
  className?: string;
};

const BottomFeatures: FunctionComponent<BottomFeaturesType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bottomFeatures, className].join(" ")}>
      <div className={styles.mobileFeature}>
        <div className={styles.financeApp}>
          <div className={styles.manageFinance}>
            <div className={styles.appDescription}>
              <div className={styles.appName}>
                <img
                  className={styles.appNameChild}
                  loading="lazy"
                  alt=""
                  src="/star-5.svg"
                />
                <h1 className={styles.menageYourFinanceContainer}>
                  <p className={styles.menageYour}>
                    <b>{`Menage your `}</b>
                  </p>
                  <p className={styles.financeWithFriendly}>
                    <i className={styles.finance}>finance</i>
                    <b>{` with friendly `}</b>
                  </p>
                  <p className={styles.mobileApp}>
                    <b>mobile app</b>
                  </p>
                </h1>
              </div>
              <img
                className={styles.appDescriptionChild}
                loading="lazy"
                alt=""
                src="/star-4.svg"
              />
            </div>
            <div className={styles.bankingMadeSimple}>
              Banking made simple with our secure, user-friendly mobile app
              manage your finances effortlessly on the go! Download now and take
              control of your finances with ease!
            </div>
          </div>
          <div className={styles.phoneImage}>
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <img
              className={styles.phoneImageChild}
              loading="lazy"
              alt=""
              src="/group-6856@2x.png"
            />
          </div>
        </div>
      </div>
      <img
        className={styles.phoneIllustrationIcon}
        loading="lazy"
        alt=""
        src="/phone-illustration@2x.png"
      />
    </div>
  );
};

export default BottomFeatures;
