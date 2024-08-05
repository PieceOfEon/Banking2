import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Hero.module.css";

export interface HeroType {
  className?: string;
  deposits?: string;
  secureYourFundsAndWatchTh?: string;
  goldBars?: string;

  /** Style props */
  heroPadding?: CSSProperties["padding"];
};

const Hero: FunctionComponent<HeroType> = ({
  className = "",
  deposits,
  secureYourFundsAndWatchTh,
  goldBars,
  heroPadding,
}) => {
  const heroStyle: CSSProperties = useMemo(() => {
    return {
      padding: heroPadding,
    };
  }, [heroPadding]);

  return (
    <section className={[styles.hero, className].join(" ")} style={heroStyle}>
      <div className={styles.depositsInvestmentsParent}>
        <div className={styles.depositsInvestments}>
          <h1 className={styles.deposits}>{deposits}</h1>
        </div>
        <div className={styles.insuranceCallToAction}>
          <div className={styles.secureYourFunds}>
            {secureYourFundsAndWatchTh}
          </div>
          <img
            className={styles.depositsIcon}
            loading="lazy"
            alt=""
            src={goldBars}
          />
        </div>
        <div className={styles.components}>
          <button className={styles.component3}>
            <b className={styles.pickAPlan}>Learn more</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
