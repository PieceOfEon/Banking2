import { FunctionComponent } from "react";
import styles from "./FrameComponent8.module.css";

export interface FrameComponent8Type {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.layoutWrapper, className].join(" ")}>
      <div className={styles.layout}>
        <div className={styles.layout1}>
          <div className={styles.hero}>
            <h1 className={styles.welcomeToVeridionContainer}>
              <p className={styles.welcomeTo}>Welcome to</p>
              <p className={styles.veridionServices}>Veridion Services</p>
            </h1>
            <img
              className={styles.heroChild}
              loading="lazy"
              alt=""
              src="/line-33.svg"
            />
          </div>
          <div className={styles.atVeridionBank}>
            At Veridion Bank, we are dedicated to providing comprehensive
            financial solutions tailored to your needs. Whether you're looking
            for loans, deposits, investments, or insurance, our wide range of
            services is designed to help you achieve your financial goals with
            confidence and ease.
          </div>
          <button className={styles.component1}>
            <b className={styles.pickAPlan}>Try Veridion now</b>
          </button>
        </div>
        <img
          className={styles.heandWithLogoIcon}
          loading="lazy"
          alt=""
          src="/heand-with-logo.svg"
        />
      </div>
    </section>
  );
};

export default FrameComponent8;
