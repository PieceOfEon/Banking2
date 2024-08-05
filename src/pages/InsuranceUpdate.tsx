import { FunctionComponent, useCallback } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import InsuranceDescription from "../components/InsuranceDescription";
import HeroColumns from "../components/HeroColumns";
import InsuranceOptions from "../components/InsuranceOptions";
import { useNavigate } from "react-router-dom";
import SavingsAccountsDetails from "../components/SavingsAccountsDetails";
import Footer1 from "../components/Shared/Footer1";
import styles from "./InsuranceUpdate.module.css";

const InsuranceUpdate: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHealthFAQButtonClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className={styles.insuranceUpdate}>
      <HeaderFinal
        logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg"
        headerFinalAlignSelf="stretch"
        headerFinalWidth="unset"
      />
      <div className={styles.wrapperShape}>
        <img className={styles.shapeIcon} alt="" src="/vector-12.svg" />
      </div>
      <main className={styles.lifeInsuranceContentWrapper}>
        <section className={styles.lifeInsuranceContent}>
          <InsuranceDescription />
          <HeroColumns
            investment="Life "
            products="Insurance"
            exploreOurRangeOfInvestme="Secure your family's future with our life insurance plans. We offer a range of policies to provide financial protection and peace of mind. Benefit from personalized service and competitive rates tailored to your needs. Contact us today to find the right life insurance plan for you."
            pickAPlan="Get Life Insurance"
            propAlignSelf="unset"
            propWidth="100rem"
          />
          <InsuranceOptions />
          <div className={styles.healthInsuranceContentWrapper}>
            <div className={styles.healthInsuranceContent}>
              <div className={styles.healthInsuranceTitle}>
                <h1 className={styles.healthInsurance}>
                  <span>{`Health `}</span>
                  <span className={styles.insurance}>Insurance</span>
                </h1>
              </div>
              <div className={styles.healthInsuranceDescription}>
                <div className={styles.stayCoveredWith}>
                  Stay covered with our flexible health insurance options. Our
                  plans offer comprehensive coverage and competitive rates to
                  ensure you and your family get the care you need. Enjoy
                  personalized support from our expert advisors. Reach out to us
                  today to choose the best health insurance plan for your needs.
                </div>
              </div>
              <div className={styles.healthInsurancePlan}>
                <div className={styles.healthPlanButton}>
                  <button className={styles.component2}>
                    <b className={styles.pickAPlan}>Get Health Insurance</b>
                  </button>
                  <button
                    className={styles.healthFAQButton}
                    onClick={onHealthFAQButtonClick}
                  >
                    <b className={styles.faq}>FAQ</b>
                  </button>
                </div>
              </div>
              <div className={styles.healthInsuranceContentInner}>
                <div className={styles.frameParent}>
                  <SavingsAccountsDetails
                    cancellation="/prices.svg"
                    moneyMarketAccounts={`Individual & Family Plans:`}
                    higherYieldsWithLimitedCh="Comprehensive coverage for medical needs."
                    star23="/star-23.svg"
                    star24="/star-24.svg"
                    propPadding="var(--padding-base) var(--padding-13xl) 10.687rem"
                    propGap="20px"
                  />
                  <SavingsAccountsDetails
                    cancellation="/cancellation.svg"
                    moneyMarketAccounts="Supplemental Insurance:"
                    higherYieldsWithLimitedCh="Additional protection for out-of-pocket expenses."
                    star23="/star-23-1.svg"
                    star24="/star-24-1.svg"
                    propPadding="23px 32px 164px"
                    propGap="13px"
                  />
                </div>
              </div>
            </div>
          </div>
          <HeroColumns
            investment="Auto "
            products="Insurance"
            exploreOurRangeOfInvestme="Drive with confidence with our auto insurance plans. We provide coverage options that fit your budget and protect your vehicle. Benefit from competitive rates and personalized service from our knowledgeable advisors. Contact us today to get a quote and secure your auto insurance."
            pickAPlan="Get Auto Insurance"
            propAlignSelf="unset"
            propWidth="100rem"
          />
          <div className={styles.frameGroup}>
            <div className={styles.protectionIconParent}>
              <div className={styles.protectionIcon}>
                <div className={styles.protection}>
                  <img
                    className={styles.protectionIcon1}
                    loading="lazy"
                    alt=""
                    src="/protection.svg"
                  />
                </div>
                <div className={styles.liability}>
                  <h2 className={styles.liabilityCoverage}>
                    Liability Coverage:
                  </h2>
                  <div className={styles.protectionForBodily}>
                    {" "}
                    Protection for bodily injury and property damage.
                  </div>
                </div>
              </div>
              <img className={styles.extrudeGroupIcon} loading="lazy" alt="" />
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.frameChild} alt="" src="/vector-13.svg" />
              <div className={styles.autoIconParent}>
                <div className={styles.autoIcon}>
                  <img
                    className={styles.autoIcon1}
                    loading="lazy"
                    alt=""
                    src="/auto.svg"
                  />
                </div>
                <div className={styles.collision}>
                  <h2 className={styles.comprehensiveAndCollisionContainer}>
                    <p className={styles.comprehensive}>{`Comprehensive `}</p>
                    <p className={styles.andCollision}>and Collision:</p>
                  </h2>
                  <div className={styles.coverageForTheft}>
                    Coverage for theft, vandalism, and accidents.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.ideaWrapper}>
                <img
                  className={styles.ideaIcon}
                  loading="lazy"
                  alt=""
                  src="/idea1.svg"
                />
              </div>
              <h2 className={styles.additionOptions}>Addition Options:</h2>
              <img className={styles.extrudeGroupIcon1} alt="" />
              <div className={styles.uninsuredMotoristPersonal}>
                Uninsured motorist, personal injury protection, and roadside
                assistance.
              </div>
            </div>
          </div>
        </section>
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

export default InsuranceUpdate;
