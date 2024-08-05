import { FunctionComponent, useCallback } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import HeroColumns from "../components/HeroColumns";
import FundContent from "../components/FundContent";
import FeatureRows from "../components/FeatureRows";
import FeatureRows1 from "../components/FeatureRows1";
import ShortTermDescription from "../components/ShortTermDescription";
import { useNavigate } from "react-router-dom";
import Footer1 from "../components/Shared/Footer1";
import styles from "./LoansUpdate.module.css";

const LoansUpdate: FunctionComponent = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className={styles.loansUpdate}>
      <main className={styles.headerFinalParent}>
        <HeaderFinal
          logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg"
          headerFinalAlignSelf="stretch"
          headerFinalWidth="unset"
        />
        <section className={styles.mainContent}>
          <div className={styles.loanTypesParent}>
            <div className={styles.loanTypes}>
              <div className={styles.loanCards}>
                <div className={styles.cardDetails}>
                  <div className={styles.loanOptions}>
                    <h1 className={styles.loans}>Loans</h1>
                  </div>
                  <button className={styles.component1}>
                    <b className={styles.pickAPlan}>Get Loan</b>
                  </button>
                </div>
              </div>
              <div className={styles.bankLoans}>
                <div className={styles.bankLoanContent}>
                  <img
                    className={styles.loansIcon}
                    loading="lazy"
                    alt=""
                    src="/loans.svg"
                  />
                  <div className={styles.veridionBankOffers}>
                    Veridion Bank offers a variety of loan products to help you
                    finance your dreams and manage your expenses. Our
                    competitive rates and flexible terms make borrowing simple
                    and stress-free.
                  </div>
                </div>
              </div>
            </div>
            <HeroColumns
              investment="Mortgage"
              products=" Loans"
              exploreOurRangeOfInvestme="Looking to buy or refinance a home? Our expert mortgage advisors offer personalized guidance to help you secure the best rates and terms tailored to your needs. Choose from a variety of loan options, including fixed-rate, adjustable-rate, FHA, VA, and jumbo loans. Enjoy a simplified application process and competitive interest rates. Contact us today to start your journey towards homeownership!"
              pickAPlan="Get Mortgage Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
            <div className={styles.loanTypes1}>
              <div className={styles.frameParent}>
                <FundContent
                  fundIllustration="/vector-111.svg"
                  plan="/extrudegroup.svg"
                  mutualFunds="Competitive Rates:"
                  diversifiedPortfoliosMana="Benefit from low-interest rates to make homeownership affordable."
                  propAlignSelf="unset"
                  propWidth="25.313rem"
                />
                <FeatureRows
                  house="/extrudegroup-1.svg"
                  retirementAcc="Flexible Terms:"
                  planForASecureFutureWithO="Choose from fixed-rate or adjustable-rate mortgages."
                  propPadding="1.475rem var(--padding-12xl) var(--padding-26xl) var(--padding-13xl)"
                  propGap="0.731rem"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows1
                  group="/group1.svg"
                  group1="/group-112.svg"
                  vector="/vector1.svg"
                  vector1="/vector-11.svg"
                  group2="/group-212.svg"
                  group3="/group-312.svg"
                  group4="/group-412.svg"
                  vector2="/vector-2.svg"
                  vector3="/vector-31.svg"
                  vector4="/vector-41.svg"
                  group5="/group-57.svg"
                  stocksAndBonds="Expert Guidance:"
                  equityAndFixedIncomeOptio="Our mortgage specialists are here to assist you every step of the way."
                  propPadding="2.381rem var(--padding-12xl) var(--padding-26xl)"
                  propGap="1.756rem"
                />
              </div>
            </div>
            <HeroColumns
              investment="Personal"
              products=" Loans"
              exploreOurRangeOfInvestme="Need funds for an important expense? Our personalized personal loans offer flexible terms and competitive rates to fit your financial needs. Enjoy a quick and easy application process with support from our experienced advisors. Whether for debt consolidation, home improvement, or unexpected expenses, we’re here to help. Contact us today to explore your options and get started!"
              pickAPlan="Get Personal Loan"
              propAlignSelf="unset"
              propWidth="99.375rem"
            />
            <div className={styles.unsecuredLoan}>
              <div className={styles.unsecuredLoanContent}>
                <div className={styles.loanHighlights}>
                  <div className={styles.wrapperHighlightIcons}>
                    <img
                      className={styles.highlightIcons}
                      alt=""
                      src="/vector-12.svg"
                    />
                  </div>
                  <div className={styles.highlightDetails}>
                    <div className={styles.speedIcon}>
                      <img
                        className={styles.speedIcon1}
                        loading="lazy"
                        alt=""
                        src="/speed.svg"
                      />
                    </div>
                    <h2 className={styles.unsecuredLoans}>Unsecured Loans:</h2>
                    <div className={styles.noCollateralRequiredContainer}>
                      <p
                        className={styles.noCollateralRequired}
                      >{`No collateral required for quick `}</p>
                      <p className={styles.andEasyFunding}>and easy funding.</p>
                    </div>
                  </div>
                </div>
                <FeatureRows
                  house="/protection1.svg"
                  retirementAcc="Fixed Rates:"
                  planForASecureFutureWithO="Enjoy predictable monthly payments. Live with best rates."
                  propPadding="25px 31px 45px 32px"
                  propGap="11.5px"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
                <FeatureRows
                  house="/idea1.svg"
                  retirementAcc="Fast Approval:"
                  planForASecureFutureWithO="Receive your funds quickly to cover immediate needs."
                  propPadding="24px 31px 45px 32px"
                  propGap="11.5px"
                  propWidth="25.313rem"
                  propFlex="unset"
                />
              </div>
            </div>
            <div className={styles.autoLoanContentWrapper}>
              <div className={styles.autoLoanContent}>
                <ShortTermDescription
                  shortTerm="Auto"
                  deposits=" Loans"
                  needQuickAccessToYourSavi="Dreaming of a new car? Our auto loans provide competitive rates and flexible terms to make your vehicle purchase simple and affordable. Benefit from a straightforward application process and personalized service from our knowledgeable advisors. Whether you’re buying new or used, we’re here to help you drive away in your dream car. Reach out to us today to start your auto loan application!"
                />
                <div className={styles.autoLoanCTA}>
                  <div className={styles.component4Parent}>
                    <button className={styles.component4}>
                      <b className={styles.pickAPlan1}>Get Auto Loan</b>
                    </button>
                    <div
                      className={styles.autoLoanHelpLabelWrapper}
                      onClick={onGroupContainerClick}
                    >
                      <div className={styles.autoLoanHelpLabel}>
                        <b className={styles.faq}>FAQ</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.loanBenefits}>
              <div className={styles.benefitDetails}>
                <div className={styles.benefitIcons}>
                  <div className={styles.affordableIcon}>
                    <img
                      className={styles.flowerIcon}
                      loading="lazy"
                      alt=""
                      src="/flower1.svg"
                    />
                  </div>
                  <div className={styles.affordableDescription}>
                    <h2 className={styles.affordable}>Affordable:</h2>
                    <div className={styles.competitiveRatesFor}>
                      Competitive rates for new and used vehicles.
                    </div>
                  </div>
                </div>
                <img className={styles.extrudeGroupIcon} alt="" />
              </div>
              <div className={styles.benefitDetails1}>
                <img
                  className={styles.benefitDetailsChild}
                  alt=""
                  src="/vector-13.svg"
                />
                <div className={styles.flexibleIconParent}>
                  <div className={styles.flexibleIcon}>
                    <img
                      className={styles.documentIcon}
                      loading="lazy"
                      alt=""
                      src="/document1.svg"
                    />
                  </div>
                  <div className={styles.flexibleDescription}>
                    <h2 className={styles.flexibleRepayment}>
                      <p className={styles.flexible}>{`Flexible `}</p>
                      <p className={styles.repayment}>repayment:</p>
                    </h2>
                    <div className={styles.termsTailoredTo}>
                      Terms tailored to fit your budget.
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.benefitDetails2}>
                <div className={styles.extrudeGroupWrapper}>
                  <img className={styles.extrudeGroupIcon1} alt="" />
                </div>
                <div className={styles.timeWrapper}>
                  <img
                    className={styles.timeIcon}
                    loading="lazy"
                    alt=""
                    src="/time.svg"
                  />
                </div>
                <h2 className={styles.quickProcess}>Quick Process:</h2>
                <div className={styles.efficientApprovalProcess}>
                  Efficient approval process to get you on the road sooner.
                </div>
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

export default LoansUpdate;
