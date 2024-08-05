import { FunctionComponent } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import Footer1 from "../components/Shared/Footer1";
import styles from "./FAQ.module.css";
import Droplist from "../components/FAQ/Droplist";

const FAQ: FunctionComponent = () => {
  return (
    <div className={styles.faq}>
       <HeaderFinal
          logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg"
        />
      <main className={styles.headerFinalParent}>
       
        <section className={styles.content}>
          <div className={styles.mainContent}>
            <div className={styles.mainContentInner}>
              <div className={styles.frameParent}>
                <div className={styles.starIconWrapper}>
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                </div>
                <div className={styles.sideContentDetails}>
                  <div className={styles.fAQContent}>
                    <h1 className={styles.faq1}>FAQ</h1>
                    <img
                      className={styles.fAQStar}
                      loading="lazy"
                      alt=""
                      src="/star-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <Droplist></Droplist>

            <div className={styles.generalInformationParent}>
              <h3 className={styles.generalInformation}>General Information</h3>
              <div className={styles.frameGroup}>
                <div className={styles.whatIsVeridionParent}>
                  <div className={styles.whatIsVeridion}>What is Veridion?</div>
                  <img
                    className={styles.vector24Stroke}
                    loading="lazy"
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA}>
                  Veridion is a comprehensive online banking platform offering a
                  range of financial services, including checking and savings
                  accounts, loans, investment opportunities, and more.
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.whatIsVeridionGroup}>
                  <div className={styles.whatIsVeridion1}>
                    How do I sign up for a Veridion account?
                  </div>
                  <img
                    className={styles.vector24Stroke1}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA1}>
                  You can sign up for a Veridion account by visiting our
                  website, clicking on the "Sign Up" button, and following the
                  registration instructions.
                </div>
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.whatIsVeridionContainer}>
                  <div className={styles.whatIsVeridion2}>
                    How do I update my personal information?
                  </div>
                  <img
                    className={styles.vector24Stroke2}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA2}>
                  To update your personal information, log in to your Veridion
                  account, go to the "Profile" section, and make the necessary
                  changes
                </div>
              </div>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <h3 className={styles.accountManagement}>Account Management</h3>
              <div className={styles.frameParent1}>
                <div className={styles.whatIsVeridionParent1}>
                  <div className={styles.whatIsVeridion3}>
                    How do I reset my password?
                  </div>
                  <img
                    className={styles.vector24Stroke3}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA3}>
                  To reset your password, go to the login page and click on the
                  "Forgot Password" link. Follow the instructions to reset your
                  password.
                </div>
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.whatIsVeridionParent2}>
                  <div className={styles.whatIsVeridion4}>
                    Can I access my Veridion account on my mobile device?
                  </div>
                  <img
                    className={styles.vector24Stroke4}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA4}>
                  Yes, Veridion has a mobile app available for both iOS and
                  Android devices, allowing you to manage your account on the
                  go.
                </div>
              </div>
              <div className={styles.frameParent3}>
                <div className={styles.whatIsVeridionParent3}>
                  <div className={styles.whatIsVeridion5}>
                    How do I update my personal information?
                  </div>
                  <img
                    className={styles.vector24Stroke5}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA5}>
                  To update your personal information, log in to your Veridion
                  account, go to the "Profile" section, and make the necessary
                  changes
                </div>
              </div>
              <img
                className={styles.frameItem}
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <h3 className={styles.bankingPlans}>Banking Plans</h3>
              <div className={styles.frameParent4}>
                <div className={styles.whatIsVeridionParent4}>
                  <div className={styles.whatIsVeridion6}>
                    What are the different plans offered by Veridion?
                  </div>
                  <img
                    className={styles.vector24Stroke6}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA6}>
                  Veridion offers several banking plans: Standard, Plus,
                  Premium, Metal, and Ultra. Each plan comes with its own set of
                  features and benefits.
                </div>
              </div>
              <div className={styles.frameParent5}>
                <div className={styles.whatIsVeridionParent5}>
                  <div className={styles.whatIsVeridion7}>
                    How do I upgrade my plan?
                  </div>
                  <img
                    className={styles.vector24Stroke7}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA7}>
                  To upgrade your plan, log in to your Veridion account, go to
                  the "Account Settings" section, and select the plan you wish
                  to upgrade to.
                </div>
              </div>
              <div className={styles.frameParent6}>
                <div className={styles.whatIsVeridionParent6}>
                  <div className={styles.whatIsVeridion8}>
                    What are the fees associated with each plan?
                  </div>
                  <img
                    className={styles.vector24Stroke8}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA8}>
                  The fees vary depending on the plan. Detailed information
                  about fees can be found on our website under the "Pricing"
                  section.
                </div>
              </div>
              <img
                className={styles.frameInner}
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <h3 className={styles.transactionsAndPayments}>
                Transactions and Payments
              </h3>
              <div className={styles.frameParent7}>
                <div className={styles.whatIsVeridionParent7}>
                  <div className={styles.whatIsVeridion9}>
                    How do I transfer money between accounts?
                  </div>
                  <img
                    className={styles.vector24Stroke9}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA9}>
                  You can transfer money between accounts by logging in to your
                  Veridion account, selecting the "Transfer" option, and
                  following the prompts.
                </div>
              </div>
              <div className={styles.frameParent8}>
                <div className={styles.whatIsVeridionParent8}>
                  <div className={styles.whatIsVeridion10}>
                    Are there limits on transactions?
                  </div>
                  <img
                    className={styles.vector24Stroke10}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA10}>
                  Yes, transaction limits vary based on your plan. Please refer
                  to the plan details on our website for specific information.
                </div>
              </div>
              <div className={styles.frameParent9}>
                <div className={styles.whatIsVeridionParent9}>
                  <div className={styles.whatIsVeridion11}>
                    How do I pay my bills through Veridion?
                  </div>
                  <img
                    className={styles.vector24Stroke11}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA11}>
                  To pay bills, log in to your Veridion account, select the
                  "Bill Pay" option, and follow the instructions to set up and
                  make payments.
                </div>
              </div>
              <img
                className={styles.lineIcon}
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <h3 className={styles.customerSupport}>Customer Support</h3>
              <div className={styles.frameParent10}>
                <div className={styles.whatIsVeridionParent10}>
                  <div className={styles.whatIsVeridion12}>
                    How do I contact Veridion customer support?
                  </div>
                  <img
                    className={styles.vector24Stroke12}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA12}>
                  You can contact Veridion customer support through our
                  website's "Contact Us" page, via email at
                  support@veridion.com, or by calling our support hotline.
                </div>
              </div>
              <div className={styles.frameParent11}>
                <div className={styles.whatIsVeridionParent11}>
                  <div className={styles.whatIsVeridion13}>
                    What are the customer support hours?
                  </div>
                  <img
                    className={styles.vector24Stroke13}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA13}>
                  Veridion customer support is available 24/7 to assist you with
                  any inquiries or issues.
                </div>
              </div>
              <div className={styles.frameParent12}>
                <div className={styles.whatIsVeridionParent12}>
                  <div className={styles.whatIsVeridion14}>
                    How do I report a lost or stolen card?
                  </div>
                  <img
                    className={styles.vector24Stroke14}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA14}>
                  To report a lost or stolen card, log in to your Veridion
                  account, go to the "Support" section, and follow the
                  instructions to report your card.
                </div>
              </div>
              <img
                className={styles.frameChild1}
                loading="lazy"
                alt=""
                src="/line-21.svg"
              />
              <h3 className={styles.additionalServices}>Additional Services</h3>
              <div className={styles.frameParent13}>
                <div className={styles.whatIsVeridionParent13}>
                  <div className={styles.whatIsVeridion15}>
                    Does Veridion offer loans?
                  </div>
                  <img
                    className={styles.vector24Stroke15}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA15}>
                  Yes, Veridion offers a variety of loan products, including
                  personal loans, home loans, and auto loans. Detailed
                  information can be found on our website under the "Loans"
                  section.
                </div>
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.whatIsVeridionParent14}>
                  <div className={styles.whatIsVeridion16}>
                    Can I invest through Veridion?
                  </div>
                  <img
                    className={styles.vector24Stroke16}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA16}>
                  Yes, Veridion provides investment opportunities, including
                  stocks, bonds, and mutual funds. Visit the "Investments"
                  section on our website for more details.
                </div>
              </div>
              <div className={styles.frameParent15}>
                <div className={styles.whatIsVeridionParent15}>
                  <div className={styles.whatIsVeridion17}>
                    How do I apply for a loan?
                  </div>
                  <img
                    className={styles.vector24Stroke17}
                    alt=""
                    src="/vector-24-stroke.svg"
                  />
                </div>
                <div className={styles.veridionIsA17}>
                  To apply for a loan, log in to your Veridion account, navigate
                  to the "Loans" section, and follow the application process.
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

export default FAQ;
