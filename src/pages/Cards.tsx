import { FunctionComponent } from "react";
import FrameComponent7 from "../components/Cards/FrameComponent7";
import CardRow1 from "../components/Cards/CardRow1";
import FrameComponent6 from "../components/Cards/FrameComponent6";
import CardRow from "../components/Cards/CardRow";
import FrameComponent5 from "../components/Cards/FrameComponent5";
import FrameComponent4 from "../components/Cards/FrameComponent4";
import styles from "./Cards.module.css";
import HeaderFinal from "../components/Shared/HeaderFinal";
import Footer1 from "../components/Shared/Footer1";

const Cards: FunctionComponent = () => {
  return (
    <div className={styles.cards}>
      <HeaderFinal logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg" activePage="cards"/>
      <main>
      <section className={styles.solutionCardsWrapper}>
        <div className={styles.solutionCards}>
          <FrameComponent7 />
          <CardRow1 />
          <div className={styles.solutionContainer}>
            <div className={styles.wrapperVersatileCardSolutio}>
              <img
                className={styles.versatileCardSolutionsIcon}
                loading="lazy"
                alt=""
                src="/versatile-card-solutions.svg"
              />
            </div>
          </div>
          <FrameComponent6 />
          <CardRow />
        </div>
      </section>
      <FrameComponent5 />
      <section className={styles.accordionParent}>
        <img
          className={styles.accordionIcon}
          loading="lazy"
          alt=""
          src="/star-12.svg"
        />
        <img
          className={styles.enhancedSecurityFeaturesIcon}
          alt=""
          src="/enhanced-security-features.svg"
        />
      </section>
      <section className={styles.starSecurityParent}>
        <img
          className={styles.starSecurityIcon}
          loading="lazy"
          alt=""
          src="/star-12.svg"
        />
        <img
          className={styles.exclusiveBusinessRewardsIcon}
          alt=""
          src="/exclusive-business-rewards.svg"
        />
      </section>
      <FrameComponent4 />
      </main>
      <Footer1
        background="/background.svg"
        group18="/facebookIcon.svg"
        component8="/component-8.svg"
        group17="/group-171@2x.png"
        linkCount="/vector-6.svg"
        propAlignSelf="center"
        propWidth="120rem"
      />
    </div>
  );
};

export default Cards;
