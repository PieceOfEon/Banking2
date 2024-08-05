import { FunctionComponent, useCallback } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import HeroTitle from "../components/HeroTitle";
import ShortTermDescription from "../components/ShortTermDescription";
import { useNavigate } from "react-router-dom";
import SavingsAccountsDetails from "../components/SavingsAccountsDetails";
import styles from "./DepositesUpdate.module.css";
import Footer1 from "../components/Shared/Footer1";

const DepositesUpdate: FunctionComponent = () => {
  const navigate = useNavigate();

  const onShortTermFeaturesClick = useCallback(() => {
    navigate("/faq");
  }, [navigate]);

  return (
    <div className={styles.depositesUpdate}>
      <HeaderFinal
        logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg"
        headerFinalAlignSelf="stretch"
        headerFinalWidth="unset"
      />
      <div className={styles.wrapperHeroImage}>
        <img className={styles.heroImageIcon} alt="" src="/hero-image.svg" />
      </div>
      <main className={styles.heroContentWrapper}>
        <section className={styles.heroContent}>
          <HeroTitle
            secureYourFundsAndWatchTh="Secure your funds and watch them grow with Veridion Bank’s range of deposit accounts. We provide safe and convenient options for managing your money effectively."
            deposits="Deposits"
            pickAPlan="Get Deposit"
            dEPOSITS="/deposits1.svg"
          />
          <div className={styles.shortTermContentWrapper}>
            <div className={styles.shortTermContent}>
              <div className={styles.shortTermTitle}>
                <div className={styles.shortTermSubtitle}>
                  <ShortTermDescription
                    shortTerm="Short-Term "
                    deposits="Deposits"
                    needQuickAccessToYourSavi="Need quick access to your savings? Our short-term deposit accounts offer competitive rates and flexible terms to meet your immediate financial needs. Enjoy easy account management and personalized support from our financial experts. Choose from options like savings accounts and short-term CDs. Contact us today to start growing your savings!"
                  />
                  <div className={styles.shortTermPlan}>
                    <div className={styles.frameParent}>
                      <div className={styles.shortTermFAQWrapper}>
                        <div className={styles.shortTermFAQ}>
                          <button className={styles.component2}>
                            <b className={styles.pickAPlan}>
                              Get Short-Term Deposit
                            </b>
                          </button>
                          <button
                            className={styles.shortTermFeatures}
                            onClick={onShortTermFeaturesClick}
                          >
                            <b className={styles.faq}>FAQ</b>
                          </button>
                        </div>
                      </div>
                      <div className={styles.shortTermDetails}>
                        <div className={styles.savingsAccountsDetails}>
                          <div className={styles.savingsAccountsContent}>
                            <div className={styles.group}>
                              <div className={styles.cancellationPolicyDetails}>
                                <img
                                  className={styles.groupIcon}
                                  loading="lazy"
                                  alt=""
                                  src="/group1.svg"
                                />
                                <img
                                  className={styles.groupIcon1}
                                  alt=""
                                  src="/group-112.svg"
                                />
                                <img
                                  className={styles.vectorIcon}
                                  alt=""
                                  src="/vector1.svg"
                                />
                                <img
                                  className={styles.vectorIcon1}
                                  alt=""
                                  src="/vector-11.svg"
                                />
                                <img
                                  className={styles.groupIcon2}
                                  alt=""
                                  src="/group-212.svg"
                                />
                                <img
                                  className={styles.groupIcon3}
                                  alt=""
                                  src="/group-312.svg"
                                />
                                <img
                                  className={styles.groupIcon4}
                                  alt=""
                                  src="/group-412.svg"
                                />
                                <img
                                  className={styles.vectorIcon2}
                                  alt=""
                                  src="/vector-2.svg"
                                />
                                <img
                                  className={styles.vectorIcon3}
                                  alt=""
                                  src="/vector-31.svg"
                                />
                                <img
                                  className={styles.vectorIcon4}
                                  alt=""
                                  src="/vector-41.svg"
                                />
                                <img
                                  className={styles.groupIcon5}
                                  alt=""
                                  src="/group-57.svg"
                                />
                              </div>
                            </div>
                          </div>
                          <div className={styles.accountsComparison}>
                            <h2 className={styles.savingsAccounts}>
                              Savings Accounts:
                            </h2>
                            <div className={styles.savingsAccountsFeatures}>
                              <div
                                className={styles.savingsAccountsDescription}
                              >
                                <div
                                  className={styles.earnInterestWithContainer}
                                >
                                  <p
                                    className={styles.earnInterestWith}
                                  >{`Earn interest with easy access `}</p>
                                  <p className={styles.toYourFunds}>
                                    to your funds.
                                  </p>
                                </div>
                              </div>
                              <div className={styles.savingsAccountsRating}>
                                <img
                                  className={styles.savingsAccountsRatingChild}
                                  loading="lazy"
                                  alt=""
                                  src="/star-23.svg"
                                />
                                <img
                                  className={styles.savingsAccountsRatingItem}
                                  alt=""
                                  src="/star-24.svg"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <SavingsAccountsDetails
                          cancellation="/cancellation.svg"
                          moneyMarketAccounts="Money Market Accounts:"
                          higherYieldsWithLimitedCh="Higher yields with limited check-writing privileges."
                          star23="/star-23-1.svg"
                          star24="/star-24-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.longTermContentParent}>
                <div className={styles.longTermContent}>
                  <div className={styles.longTermTitle}>
                    <h1 className={styles.longTermDeposits}>
                      <span>{`Long-Term `}</span>
                      <span className={styles.deposits}>Deposits</span>
                    </h1>
                  </div>
                  <div className={styles.planningForThe}>
                    Planning for the future? Our long-term deposit accounts
                    provide higher interest rates and secure growth for your
                    financial goals. Benefit from options like long-term CDs and
                    money market accounts, with expert support from our team.
                    Enjoy peace of mind with guaranteed returns over extended
                    periods. Reach out to us today to secure your financial
                    future!
                  </div>
                </div>
                <div className={styles.longTermPlan}>
                  <div className={styles.component2Parent}>
                    <button className={styles.component21}>
                      <b className={styles.pickAPlan1}>Get Long-Term Deposit</b>
                    </button>
                    <button
                      className={styles.faqWrapper}
                      onClick={onShortTermFeaturesClick}
                    >
                      <b className={styles.faq1}>FAQ</b>
                    </button>
                  </div>
                </div>
              </div>
              <div className={styles.investmentOptions}>
                <div className={styles.investmentOptionsDetails}>
                  <div className={styles.certificatesDetails}>
                    <div className={styles.certificatesIcon}>
                      <img
                        className={styles.documentIcon}
                        loading="lazy"
                        alt=""
                        src="/document.svg"
                      />
                    </div>
                    <div className={styles.certificatesFeatures}>
                      <div className={styles.certificatesDescription}>
                        <h2 className={styles.certificatesCds}>
                          Certificates (CDs):
                        </h2>
                        <div className={styles.fixedInterestRates}>
                          Fixed interest rates for terms ranging from 6 months
                          to 5 years.
                        </div>
                      </div>
                      <div className={styles.retirementAccountsDetails}>
                        <div className={styles.retirementAccountsFeatures}>
                          <img
                            className={styles.retirementAccountsFeaturesChild}
                            alt=""
                            src="/star-23-1.svg"
                          />
                          <img
                            className={styles.retirementAccountsFeaturesItem}
                            alt=""
                            src="/star-24-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.certificatesDetails1}>
                    <div className={styles.wrapperVector12}>
                      <img
                        className={styles.wrapperVector12Child}
                        alt=""
                        src="/vector-12.svg"
                      />
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.pensionWrapper}>
                        <img
                          className={styles.pensionIcon}
                          loading="lazy"
                          alt=""
                          src="/pension.svg"
                        />
                      </div>
                      <div className={styles.retirementAccIrasParent}>
                        <h2 className={styles.retirementAccIras}>
                          Retirement Acc. (IRAs):
                        </h2>
                        <div className={styles.retirementAccountsDescriptio}>
                          <div
                            className={styles.taxAdvantagedSavingsForContainer}
                          >
                            <p
                              className={styles.taxAdvantagedSavingsFor}
                            >{`Tax-advantaged savings for `}</p>
                            <p className={styles.yourRetirement}>
                              your retirement.
                            </p>
                          </div>
                          <div className={styles.retirementAccountsRating}>
                            <img
                              className={styles.retirementAccountsRatingChild}
                              alt=""
                              src="/star-23.svg"
                            />
                            <img
                              className={styles.retirementAccountsRatingItem}
                              alt=""
                              src="/star-24.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default DepositesUpdate;
