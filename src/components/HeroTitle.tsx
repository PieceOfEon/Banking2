import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./HeroTitle.module.css";

export interface HeroTitleType {
  className?: string;
  secureYourFundsAndWatchTh?: string;
  deposits?: string;
  pickAPlan?: string;
  dEPOSITS?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const HeroTitle: FunctionComponent<HeroTitleType> = ({
  className = "",
  secureYourFundsAndWatchTh,
  deposits,
  pickAPlan,
  dEPOSITS,
  propPadding,
}) => {
  const heroTitleStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={[styles.heroTitle, className].join(" ")}
      style={heroTitleStyle}
    >
      <div className={styles.heroSubtitle}>
        <div className={styles.heroDescription}>
          <div className={styles.secureYourFunds}>
            {secureYourFundsAndWatchTh}
          </div>
          <div className={styles.depositsTitle}>
            <h1 className={styles.deposits}>{deposits}</h1>
            <button className={styles.component1}>
              <b className={styles.pickAPlan}>{pickAPlan}</b>
            </button>
          </div>
        </div>
      </div>
      <div className={styles.depositsWrapper}>
        <img
          className={styles.depositsIcon}
          loading="lazy"
          alt=""
          src={dEPOSITS}
        />
      </div>
    </div>
  );
};

export default HeroTitle;
