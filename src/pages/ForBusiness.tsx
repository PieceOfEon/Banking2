import { FunctionComponent } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import ContentColumns1 from "../components/ContentColumns1";
import ContentColumns from "../components/ContentColumns";
import Footer1 from "../components/Shared/Footer1";
import styles from "./ForBusiness.module.css";

const ForBusiness: FunctionComponent = () => {
  return (
    <div className={styles.forBusiness}>
      <HeaderFinal logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg" activePage="business"/>
      <div className={styles.mainTaglineHeaderForBusineWrapper}>
        <div className={styles.mainTaglineHeaderForBusine}>
          <h1 className={styles.onePlatformForContainer}>
            <p className={styles.onePlatformFor}>{`One Platform for All `}</p>
            <p className={styles.yourBusinessNeeds}>Your Business Needs</p>
          </h1>
          <div className={styles.projectDescription}>
            <div className={styles.affordAllYour}>
              Afford all your projects seamlessly with our integrated financial
              solutions. Manage multicurrency accounts effortlessly and keep
              your business thriving, all in one place
            </div>
          </div>
          <div className={styles.wrapperCardsHeadBusiness}>
            <img
              className={styles.cardsHeadBusinessIcon}
              loading="lazy"
              alt=""
              src="/cards-head-business.svg"
            />
          </div>
          <div className={styles.component1Wrapper}>
            <button className={styles.component1}>
              <b className={styles.pickAPlan}>Join now</b>
            </button>
          </div>
        </div>
      </div>
      <main className={styles.forBusinessInner}>
        <section className={styles.frameParent}>
          <div className={styles.solutionsContentParent}>
            <div className={styles.solutionsContent}>
              <div className={styles.solutionsHeaderParent}>
                <div className={styles.solutionsHeader}>
                  <h1 className={styles.comprehensiveFinancialSolutiContainer}>
                    <span>{`Comprehensive `}</span>
                    <span className={styles.financialSolutions}>
                      Financial Solutions
                    </span>
                  </h1>
                  <div className={styles.solutionsHeaderInner}>
                    <img
                      className={styles.frameChild}
                      loading="lazy"
                      alt=""
                      src="/line-32.svg"
                    />
                  </div>
                </div>
                <div className={styles.discoverOurRange}>
                  Discover our range of comprehensive financial solutions
                  designed to support your business at every stage. From
                  start-up funding to expansion capital, we provide the
                  resources and expertise to help your business thrive. Our
                  tailored financial services ensure you have the support you
                  need to achieve your goals.
                </div>
              </div>
            </div>
            <img
              className={styles.billsCollageIcon}
              loading="lazy"
              alt=""
              src="/bills-collage.svg"
            />
          </div>
          <div className={styles.contentColumns}>
            <img
              className={styles.cardCollageIcon}
              loading="lazy"
              alt=""
              src="/card-collage.svg"
            />
            <div className={styles.financingSecurity}>
              <div className={styles.financingSecurityDetails}>
                <h1 className={styles.allInOneProjectFinancingContainer}>
                  <p className={styles.allInOne}>{`All-in-One `}</p>
                  <p className={styles.projectFinancing}>Project Financing</p>
                </h1>
                <div className={styles.manageAllYour}>
                  Manage all your projects efficiently with our all-in-one
                  platform. Our flexible financing options allow you to fund
                  multiple projects seamlessly, ensuring you have the capital to
                  grow and innovate. Whether it's new equipment or operational
                  costs, we've got you covered.
                </div>
              </div>
            </div>
          </div>
          <ContentColumns1 />
          <div className={styles.contentColumns1}>
            <img
              className={styles.safeCollageIcon}
              loading="lazy"
              alt=""
              src="/safe-collage.svg"
            />
            <div className={styles.contentColumnsInner}>
              <div className={styles.advancedSecurityAndComplianParent}>
                <h1 className={styles.advancedSecurityAndContainer}>
                  <span>{`Advanced Security `}</span>
                  <span className={styles.andCompliance}>and Compliance</span>
                </h1>
                <div className={styles.safeguardYourBusiness}>
                  Safeguard your business with our advanced security measures
                  and compliance solutions. We prioritize the protection of your
                  financial data with state-of-the-art encryption and fraud
                  prevention technologies. Stay compliant with industry
                  regulations and focus on your business with confidence.
                </div>
              </div>
            </div>
          </div>
          <ContentColumns />
          <div className={styles.fAQContentWrapper}>
            <div className={styles.fAQContent}>
              <div className={styles.fAQHeader}>
                <div className={styles.fAQTitle}>
                  <img
                    className={styles.fAQTitleChild}
                    alt=""
                    src="/line-251.svg"
                  />
                  <h1 className={styles.veridionBusinessFaqsContainer}>
                    <span>{`Veridion `}</span>
                    <span className={styles.businessFaqs}>Business FAQS</span>
                  </h1>
                </div>
              </div>
              <div className={styles.fAQItems}>
                <div className={styles.fAQQuestionsParent}>
                  <div className={styles.fAQQuestions}>
                    <h2 className={styles.whatIsVeridion}>
                      What types of financial solutions do you offer for
                      businesses?
                    </h2>
                    <img
                      className={styles.vector24Stroke}
                      loading="lazy"
                      alt=""
                      src="/vector-24-stroke.svg"
                    />
                  </div>
                  <div className={styles.veridionIsA}>
                    We offer a range of financial solutions including business
                    loans, lines of credit, equipment financing, and
                    project-specific funding.Our services are designed to
                    provide flexible options that cater to your business’s
                    unique needs
                  </div>
                </div>
                <img
                  className={styles.fAQItemsChild}
                  loading="lazy"
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.frameGroup}>
                  <div className={styles.whatIsVeridionParent}>
                    <h2 className={styles.whatIsVeridion1}>
                      What are the benefits of having a multi-currency account?
                    </h2>
                    <img
                      className={styles.vector24Stroke1}
                      alt=""
                      src="/vector-24-stroke.svg"
                    />
                  </div>
                  <div className={styles.veridionIsA1}>
                    Multi-currency accounts allow you to manage and transact in
                    multiple currencies without incurring conversion fees. This
                    is particularly beneficial for businesses operating
                    internationally, as it simplifies financial management and
                    reduces costs associated with currency exchange.
                  </div>
                </div>
                <img
                  className={styles.fAQItemsItem}
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.frameContainer}>
                  <div className={styles.whatIsVeridionGroup}>
                    <h2 className={styles.whatIsVeridion2}>
                      How do you ensure the security of my business’s financial
                      information?
                    </h2>
                    <img
                      className={styles.vector24Stroke2}
                      alt=""
                      src="/vector-24-stroke.svg"
                    />
                  </div>
                  <div className={styles.veridionIsA2}>
                    We use advanced encryption and fraud detection technologies
                    to protect your financial information. Our systems are
                    designed to safeguard against unauthorized access and ensure
                    that your data is secure at all times.
                  </div>
                </div>
                <img
                  className={styles.fAQItemsInner}
                  alt=""
                  src="/line-21.svg"
                />
                <div className={styles.frameDiv}>
                  <div className={styles.whatIsVeridionContainer}>
                    <h2 className={styles.whatIsVeridion3}>
                      Can I get personalized financial advice for my business?
                    </h2>
                    <img
                      className={styles.vector24Stroke3}
                      alt=""
                      src="/vector-24-stroke.svg"
                    />
                  </div>
                  <div className={styles.veridionIsA3}>
                    Absolutely! Our dedicated business advisors provide
                    personalized financial advice tailored to your business’s
                    specific needs. Whether you need help with cash flow
                    management, strategic planning, or growth strategies, our
                    experts are ready to assist you.
                  </div>
                </div>
                <img className={styles.lineIcon} alt="" src="/line-21.svg" />
                <div className={styles.frameParent1}>
                  <div className={styles.whatIsVeridionParent1}>
                    <h2 className={styles.whatIsVeridion4}>
                      How do I open a multi-currency account?
                    </h2>
                    <img
                      className={styles.vector24Stroke4}
                      alt=""
                      src="/vector-24-stroke.svg"
                    />
                  </div>
                  <div className={styles.veridionIsA4}>
                    Opening a multi-currency account is straightforward. Contact
                    our customer service team or visit our website to fill out
                    an application. Once your application is approved, you’ll be
                    able to start managing and transacting in multiple
                    currencies with ease.
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

export default ForBusiness;
