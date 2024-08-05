import { FunctionComponent } from "react";
import styles from "./LeftSide1.module.css";

export interface LeftSide1Type {
  className?: string;
};

const LeftSide1: FunctionComponent<LeftSide1Type> = ({ className = "" }) => {
  return (
    <div className={[styles.leftSide, className].join(" ")}>
      <div className={styles.result11} />
      <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
      <div className={styles.leftContent}>
        <div className={styles.leftGraphic} />
        <div className={styles.logoContainer}>
          <img className={styles.logoIcon} alt="" src="/logo1.svg" />
        </div>
        <div className={styles.leftContentInner}>
          <div className={styles.welcomeBackParent}>
            <h1 className={styles.welcomeBack}>Welcome back!</h1>
            <div className={styles.journeyDescription}>
              <div className={styles.wrapperEllipse78}>
                <img
                  className={styles.wrapperEllipse78Child}
                  alt=""
                  src="/ellipse-781.svg"
                />
              </div>
              <div className={styles.wereExcitedToContainer}>
                <p
                  className={styles.wereExcitedTo}
                >{`We're excited to support your financial journey with our wide range of services. `}</p>
                <p className={styles.thankYouFor}>Thank you for choosing us!</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.leftContentChild}>
          <div className={styles.youDontHaveAnAccountParent}>
            <div className={styles.youDontHave}>You don`t have an account?</div>
            <div className={styles.component13}>
              <a href='/sign-up' className={styles.signUp}>Sign Up</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.result12Parent}>
        <img className={styles.result12Icon} alt="" src="/result-12@2x.png" />
        <img className={styles.result9Icon} alt="" src="/result-13@2x.png" />
        <img className={styles.result10Icon} alt="" src="/result-10@2x.png" />
      </div>
    </div>
  );
};

export default LeftSide1;
