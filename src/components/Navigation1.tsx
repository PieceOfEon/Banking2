import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Navigation1.module.css";

export interface Navigation1Type {
  className?: string;
  loans?: string;
  veridionBankOffersAVariet?: string;
  goldBars?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Navigation1: FunctionComponent<Navigation1Type> = ({
  className = "",
  loans,
  veridionBankOffersAVariet,
  goldBars,
  propPadding,
}) => {
  const navigationStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <section
      className={[styles.navigation, className].join(" ")}
      style={navigationStyle}
    >
      <div className={styles.frameParent}>
        <div className={styles.investmentsWrapper}>
          <h1 className={styles.investments}>{loans}</h1>
        </div>
        <div className={styles.growYourWealthAndSecureYoParent}>
          <div className={styles.growYourWealth}>
            {veridionBankOffersAVariet}
          </div>
          <img
            className={styles.investmentsIcon}
            loading="lazy"
            alt=""
            src={goldBars}
          />
        </div>
        <div className={styles.component4Wrapper}>
          <button className={styles.component4}>
            <b className={styles.pickAPlan}>Learn more</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Navigation1;
