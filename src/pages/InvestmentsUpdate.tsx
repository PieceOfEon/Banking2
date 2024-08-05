import { FunctionComponent, useCallback } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import HeroTitle from "../components/HeroTitle";
import HeroColumns from "../components/HeroColumns";
import FundContent from "../components/FundContent";
import FeatureRows1 from "../components/FeatureRows1";
import FeatureRows from "../components/FeatureRows";
import { useNavigate } from "react-router-dom";
import styles from "./InvestmentsUpdate.module.css";
import Footer1 from "../components/Shared/Footer1";

const InvestmentsUpdate: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className={styles.investmentsUpdate}>
      <main className={styles.headerFinalParent}>
        <HeaderFinal
          logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg"
          headerFinalAlignSelf="stretch"
          headerFinalWidth="unset"
        />
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <HeroTitle
              secureYourFundsAndWatchTh="Veridion Bank offers a variety of loan products to help you finance your dreams and manage your expenses. Our competitive rates and flexible terms make borrowing simple and stress-free."
              deposits="Investments"
              pickAPlan="Get Started"
              dEPOSITS="/investments1.svg"
              propPadding="0rem 0rem var(--padding-29xl)"
            />
            <HeroColumns
              investment="Investment"
              products=" Products"
              exploreOurRangeOfInvestme="Explore our range of investment products designed to meet your financial objectives. From stocks and bonds to mutual funds and ETFs, we offer diverse options with competitive returns. Our knowledgeable advisors provide personalized support to help you make informed decisions. Reach out to us today to discover the right investment products for you!"
              pickAPlan="Get Mortgage Loan"
            />
            <div className={styles.features}>
              <div className={styles.mutualFunds}>
                <FundContent
                  fundIllustration="/hero-image.svg"
                  plan="/plan.svg"
                  mutualFunds="Mutual Funds:"
                  diversifiedPortfoliosMana="Diversified portfolios managed by experienced professionals."
                />
              </div>
              <FeatureRows1
                group="/group2.svg"
                group1="/group-113.svg"
                vector="/vector2.svg"
                vector1="/vector-12.svg"
                group2="/group-213.svg"
                group3="/group-313.svg"
                group4="/group-413.svg"
                vector2="/vector-21.svg"
                vector3="/vector-32.svg"
                vector4="/vector-42.svg"
                group5="/group-58.svg"
                stocksAndBonds="Stocks and Bonds:"
                equityAndFixedIncomeOptio="Equity and fixed income options for various risk tolerances."
              />
              <FeatureRows
                house="/house.svg"
                retirementAcc="Retirement Acc:"
                planForASecureFutureWithO="Plan for a secure future with our IRAs and 401(k) plans."
              />
            </div>
            <div className={styles.heroColumns}>
              <div className={styles.frameParent}>
                <div className={styles.frameGroup}>
                  <div className={styles.adviceAndConsultationsWrapper}>
                    <h1 className={styles.adviceAndConsultations}>
                      Advice and Consultations
                    </h1>
                  </div>
                  <div className={styles.lookingForExpert}>
                    Looking for expert financial guidance? Our personalized
                    investment advice and consultations help you make informed
                    decisions and achieve your financial goals. Benefit from
                    tailored strategies based on your unique needs and risk
                    tolerance. Our professional advisors are here to assist you
                    every step of the way. Contact us today to schedule your
                    consultation and start building a secure financial future!
                  </div>
                </div>
                <div className={styles.frameWrapper}>
                  <div className={styles.component3Parent}>
                    <button className={styles.component3}>
                      <b className={styles.pickAPlan}>Get Consultation</b>
                    </button>
                    <div
                      className={styles.frameContainer}
                      onClick={onGroupContainerClick}
                    >
                      <div className={styles.faqWrapper}>
                        <b className={styles.faq}>FAQ</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.planning}>
              <div className={styles.planningItems}>
                <div className={styles.wrapperFlowerFeature}>
                  <img
                    className={styles.flowerFeatureIcon}
                    alt=""
                    src="/vector-12.svg"
                  />
                </div>
                <FeatureRows
                  house="/idea1.svg"
                  retirementAcc="Strategies:"
                  planForASecureFutureWithO="Tailored investment strategies based on your financial goals."
                  propPadding="23px 31px 45px 32px"
                  propGap="12.5px"
                  propWidth="unset"
                  propFlex="1"
                />
              </div>
              <div className={styles.planningItems1}>
                <div className={styles.groupWrapper}>
                  <div className={styles.group}>
                    <div className={styles.flowerElements}>
                      <img
                        className={styles.groupIcon}
                        alt=""
                        src="/group-62.svg"
                      />
                      <img
                        className={styles.groupIcon1}
                        alt=""
                        src="/group-72.svg"
                      />
                      <img
                        className={styles.groupIcon2}
                        alt=""
                        src="/group-82.svg"
                      />
                      <img
                        className={styles.groupIcon3}
                        alt=""
                        src="/group-92.svg"
                      />
                      <img
                        className={styles.groupIcon4}
                        alt=""
                        src="/group-102.svg"
                      />
                      <img
                        className={styles.vectorIcon}
                        alt=""
                        src="/vector-51.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.financePlanningParent}>
                  <h2 className={styles.financePlanning}>Finance Planning:</h2>
                  <div className={styles.comprehensiveAnalysisAnd}>
                    Comprehensive analysis and goal setting for long-term
                    success.
                  </div>
                </div>
              </div>
              <FeatureRows
                house="/flower.svg"
                retirementAcc="Regular Reviews:"
                planForASecureFutureWithO=" Periodic portfolio reviews to adjust and optimize your investments."
                propPadding="24px 31px 45px 32px"
                propGap="12px"
                propWidth="25.313rem"
                propFlex="unset"
              />
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

export default InvestmentsUpdate;
