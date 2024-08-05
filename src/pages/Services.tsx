import { FunctionComponent } from "react";
import FrameComponent8 from "../components/FrameComponent8";
import Hero from "../components/Hero";
import Navigation1 from "../components/Navigation1";
import styles from "./Services.module.css";
import Footer1 from "../components/Shared/Footer1";
import HeaderFinal from "../components/Shared/HeaderFinal";

const Services: FunctionComponent = () => {
  return (
    <div className={styles.services}>
      <HeaderFinal logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg" activePage="services"/>
      <main>
      <FrameComponent8 />
      <Hero
        deposits="Loans"
        secureYourFundsAndWatchTh="Veridion Bank offers a variety of loan products to help you finance your dreams and manage your expenses. Our competitive rates and flexible terms make borrowing simple and stress-free."
        goldBars="/gold-bars.svg"
        heroPadding="0rem var(--padding-xl) 28.687rem"
      />
      <Hero
        deposits="Deposits"
        secureYourFundsAndWatchTh="Secure your funds and watch them grow with Veridion Bank’s range of deposit accounts. We provide safe and convenient options for managing your money effectively."
        goldBars="/deposits.svg"
      />
      <Navigation1
        loans="Investments"
        veridionBankOffersAVariet="Grow your wealth and secure your future with Veridion Bank’s comprehensive investment services. Our expert advisors provide personalized guidance to help you make informed investment decisions."
        goldBars="/investments.svg"
      />
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

export default Services;
