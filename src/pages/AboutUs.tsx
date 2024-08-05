import { FunctionComponent } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import ContentColumn from "../components/ContentColumn";
import BankHistory from "../components/BankHistory";
import Footer1 from "../components/Shared/Footer1";
import styles from "./AboutUs.module.css";

const AboutUs: FunctionComponent = () => {
  return (
    <div className={styles.aboutUs}>
      <HeaderFinal logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg" activePage="aboutus"/>
      <main>
      <section className={styles.contentWrapperWrapper}>
        <div className={styles.contentWrapper}>
          <ContentColumn />
          <BankHistory />
        </div>
      </section>
      <section className={styles.valuesWrapperWrapper}>
        <div className={styles.valuesWrapper}>
          <div className={styles.valuesContent}>
            <div className={styles.valuesBlock}>
              <div className={styles.missionContainer}>
                <div className={styles.missionStatement}>
                  <img
                    className={styles.missionStatementChild}
                    alt=""
                    src="/line-34.svg"
                  />
                  <h1 className={styles.missionAndValuesContainer}>
                    <span>Mission</span>
                    <span className={styles.andValues}> and Values</span>
                  </h1>
                </div>
              </div>
              <div className={styles.atVeridionBankContainer}>
                <p
                  className={styles.atVeridionBank}
                >{`At Veridion Bank, our mission is to empower individuals and businesses to achieve their financial goals through personalized, innovative, and reliable banking solutions. We are guided by a set of core values that `}</p>
                <p className={styles.defineOurApproach}>
                  define our approach and commitment to our clients
                </p>
              </div>
            </div>
          </div>
          <div className={styles.coreValues}>
            <div className={styles.valueItemsParent}>
              <div className={styles.valueItems}>
                <img className={styles.groupIcon} alt="" src="/group-511.svg" />
              </div>
              <div className={styles.valueDescriptions}>
                <h2 className={styles.integrity}>Integrity</h2>
                <div className={styles.weUpholdThe}>
                  We uphold the highest standards of honesty and transparency in
                  all our dealings.
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.groupWrapper}>
                <img
                  className={styles.groupIcon1}
                  alt=""
                  src="/group-521.svg"
                />
              </div>
              <h2 className={styles.customerFocus}>Customer Focus</h2>
              <div className={styles.weStriveTo}>
                We strive to understand customers needs and provide tailored
                solutions.
              </div>
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.ideaWrapper}>
                <img
                  className={styles.ideaIcon}
                  loading="lazy"
                  alt=""
                  src="/idea.svg"
                />
              </div>
              <h2 className={styles.innovation}>Innovation</h2>
              <div className={styles.weEmbraceChange}>
                We embrace change and continually seek new ways to enhance our
                services and deliver exceptional value.
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.communityParent}>
                <h2 className={styles.community}>Community</h2>
                <img
                  className={styles.community01Icon}
                  loading="lazy"
                  alt=""
                  src="/community-01.svg"
                />
              </div>
              <div className={styles.wePositivelyImpact}>
                We positively impact communities through responsible banking and
                active involvement.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.careersSectionWrapper}>
        <div className={styles.careersSection}>
          <img className={styles.careersIcon} alt="" src="/careers@2x.png" />
          <div className={styles.careersContent}>
            <h1 className={styles.careers}>Careers</h1>
            <div className={styles.careersDivider}>
              <img
                className={styles.careersDividerChild}
                loading="lazy"
                alt=""
                src="/line-35.svg"
              />
            </div>
          </div>
          <div className={styles.joinTheVeridionBankFamilyWrapper}>
            <div className={styles.joinTheVeridion}>
              Join the Veridion Bank family and be a part of a dynamic,
              forward-thinking team. We offer a supportive and inclusive work
              environment where your growth and development are prioritized. At
              Veridion Bank, we believe that our employees are our greatest
              asset. We provide extensive training programs, career advancement
              opportunities, and a culture that encourages innovation and
              collaboration. If you are passionate about making a difference and
              looking for a rewarding career in the financial industry, explore
              our current openings and start your journey with us today.
            </div>
          </div>
          <button className={styles.component2}>
            <b className={styles.pickAPlan}>Join now</b>
          </button>
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

export default AboutUs;
