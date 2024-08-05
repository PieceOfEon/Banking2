import { FunctionComponent } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import PrivacyContent1 from "../components/PrivacyContent1";
import PrivacyContent from "../components/PrivacyContent";
import styles from "./PrivacyPolicy.module.css";
import Footer1 from "../components/Shared/Footer1";

const PrivacyPolicy: FunctionComponent = () => {
  return (
    <div className={styles.privacyPolicy}>
      <HeaderFinal
        logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg"
        headerFinalAlignSelf="stretch"
        headerFinalWidth="unset"
      />
      <main>
      <section className={styles.privacyPolicyContainerWrapper}>
        <div className={styles.privacyPolicyContainer}>
          <div className={styles.policyContent}>
            <div className={styles.frameParent}>
              <div className={styles.policyHeaderWrapper}>
                <div className={styles.policyHeader}>
                  <div className={styles.starContainer}>
                    <img
                      className={styles.starLeftIcon}
                      loading="lazy"
                      alt=""
                      src="/star-1.svg"
                    />
                  </div>
                  <div className={styles.policyTitle}>
                    <h1 className={styles.privacyPolicy1}>PRIVACY POLICY</h1>
                    <img
                      className={styles.starRightIcon}
                      loading="lazy"
                      alt=""
                      src="/star-2.svg"
                    />
                  </div>
                </div>
              </div>
              <div className={styles.atVeridionBanking}>
                At Veridion Banking, we are committed to protecting your privacy
                and safeguarding your personal information. This Privacy Policy
                outlines how we collect, use, disclose, and protect the
                information you provide to us when you use our services.
              </div>
            </div>
          </div>
          <div className={styles.placeholderParent}>
            <img
              className={styles.placeholderIcon}
              loading="lazy"
              alt=""
              src="/frame-56@2x.png"
            />
            <div className={styles.informationCollectionContain}>
              <div className={styles.informationCollectionContent}>
                <h1 className={styles.informationCollection}>
                  Information Collection
                </h1>
                <div className={styles.weCollectPersonal}>
                  We collect personal information such as your name, contact
                  details, financial information, and other relevant data
                  necessary for providing banking services. This information is
                  collected directly from you or from third parties with your
                  consent.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PrivacyContent1
        useOfInformation="Use of Information"
        weUseYourPersonalInformat="We use your personal information to provide and improve our banking services, personalize your experience, process transactions, prevent fraud, and comply with legal obligations."
        frame57="/frame-57@2x.png"
      />
      <PrivacyContent
        frame58="/frame-58@2x.png"
        informationSharing="Information Sharing"
        weMayShareYourInformation="We may share your information with third-party service providers who assist us in delivering our services. These providers are contractually obligated to maintain the confidentiality and security of your information.
"
      />
      <PrivacyContent1
        useOfInformation="Data Security"
        weUseYourPersonalInformat="We employ industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
"
        frame57="/frame-59@2x.png"
      />
      <PrivacyContent
        frame58="/frame-60@2x.png"
        informationSharing="Cookies and Tracking Technologies"
        weMayShareYourInformation="We use cookies and similar technologies to enhance your experience on our website and mobile applications. You can manage your cookie preferences through your browser settings.
Cookies are small text files placed on your device when you visit a website, helping us enhance your browsing experience and provide personalized services."
        propPadding="0rem var(--padding-2xl) var(--padding-49xl-3) var(--padding-xl)"
      />
      <PrivacyContent1
        useOfInformation="Your Rights"
        weUseYourPersonalInformat="You have the right to access, correct, or delete your personal information. You may also withdraw consent for certain processing activities where applicable.
Additionally, you can request the deletion of your personal information under certain circumstances, such as when it is no longer necessary for the purposes for which it was collected."
        frame57="/frame-61@2x.png"
      />
      <section className={styles.privacyContent}>
        <div className={styles.frameGroup}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/frame-62@2x.png"
          />
          <div className={styles.frameWrapper}>
            <div className={styles.changesToThisPrivacyPolicyParent}>
              <h1 className={styles.changesToThisContainer}>
                <p className={styles.changesToThis}>{`Changes to this `}</p>
                <p className={styles.privacyPolicy2}>Privacy Policy</p>
              </h1>
              <div className={styles.weMayUpdate}>
                We may update this Privacy Policy from time to time to reflect
                changes in our practices or for other operational, legal, or
                regulatory reasons. We will notify you of any material changes
                by posting the updated policy on our website.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.progressTrackingContentWrapper}>
        <div className={styles.progressTrackingContent}>
          <div className={styles.moreEffectiveWayToTrackPrWrapper}>
            <h1 className={styles.moreEffectiveWayContainer}>
              <p className={styles.moreEffectiveWay}>
                <span className={styles.more}>{`More `}</span>
                <span className={styles.effective}>effective</span>
                <span>{` way `}</span>
              </p>
              <p className={styles.toTrackProgress}>to track progress</p>
            </h1>
          </div>
          <div className={styles.planComparison}>
            <div className={styles.planBenefits}>
              <div className={styles.planBenefitsChild} />
              <img className={styles.benefitIcons} alt="" src="/vector-1.svg" />
              <div className={styles.planFeatures}>
                <div className={styles.featureItemsWrapper}>
                  <div className={styles.featureItems}>
                    <img
                      className={styles.featureStarsIcon}
                      loading="lazy"
                      alt=""
                      src="/star-10.svg"
                    />
                    <h1 className={styles.standart}>Standart</h1>
                  </div>
                </div>
                <div className={styles.freePlanBenefits}>
                  <h3 className={styles.free}>Free</h3>
                  <img
                    className={styles.freePlanAdditionalStars}
                    loading="lazy"
                    alt=""
                    src="/star-11.svg"
                  />
                </div>
                <div className={styles.planDescriptions}>
                  <div className={styles.theStandardPlan}>
                    The Standard Plan offers essential banking services with no
                    monthly fees. Enjoy free online transfers, basic customer
                    support, and access to a wide network of ATMs. Ideal for
                    everyday banking needs.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.planBenefits1}>
              <div className={styles.planBenefitsItem} />
              <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
              <img
                className={styles.planBenefitsInner}
                alt=""
                src="/star-111.svg"
              />
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.starParent}>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/star-10-1.svg"
                    />
                    <h1 className={styles.standart1}>Plus</h1>
                  </div>
                </div>
                <div className={styles.freeParent}>
                  <div className={styles.free1}>$4,99/month</div>
                  <img
                    className={styles.frameInner}
                    alt=""
                    src="/star-111.svg"
                  />
                </div>
                <div className={styles.theStandardPlanOffersEssenWrapper}>
                  <div className={styles.theStandardPlan1}>
                    The Plus Plan includes all Standard features with added
                    benefits such as higher transaction limits, priority
                    customer support. Perfect for those seeking enhanced banking
                    convenience.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.planBenefits2}>
              <div className={styles.rectangleDiv} />
              <img className={styles.vectorIcon1} alt="" src="/vector-3.svg" />
              <img className={styles.starIcon} alt="" src="/star-111.svg" />
              <div className={styles.frameParent1}>
                <div className={styles.frameWrapper1}>
                  <div className={styles.starGroup}>
                    <img
                      className={styles.frameChild1}
                      alt=""
                      src="/star-10-2.svg"
                    />
                    <h1 className={styles.standart2}>{`Premium `}</h1>
                  </div>
                </div>
                <div className={styles.frameWrapper2}>
                  <div className={styles.freeGroup}>
                    <div className={styles.free2}>$8,99/month</div>
                    <img
                      className={styles.freePlanStar}
                      alt=""
                      src="/star-11-2.svg"
                    />
                  </div>
                </div>
                <div className={styles.theStandardPlan2}>
                  The Premium Plan provides all Plus features along with
                  exclusive perks like lower foreign transaction fees, travel
                  insurance, and cashback rewards on purchases. Tailored for
                  frequent travelers and high spenders.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.premiumPlanComparison}>
            <div className={styles.premiumPlanBenefits}>
              <div className={styles.premiumPlanBenefitsChild} />
              <img
                className={styles.premiumBenefitIcons}
                alt=""
                src="/vector-4.svg"
              />
              <div className={styles.premiumPlanFeatures}>
                <div className={styles.premiumFeatureItems}>
                  <img
                    className={styles.premiumFeatureStars}
                    alt=""
                    src="/star-10-3.svg"
                  />
                  <h1 className={styles.ironPlan}>Iron Plan</h1>
                </div>
                <div className={styles.premiumPlanDurations}>
                  <div className={styles.premiumPlanMonths}>
                    <div className={styles.month}>$15,99/month</div>
                    <img
                      className={styles.premiumPlanStar}
                      alt=""
                      src="/star-11-3.svg"
                    />
                  </div>
                </div>
                <div className={styles.premiumPlanDescriptions}>
                  <div className={styles.theStandardPlan3}>
                    The Standard Plan offers essential banking services with no
                    monthly fees. Enjoy free online transfers, basic customer
                    support, and access to a wide network of ATMs. Ideal for
                    everyday banking needs.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.premiumPlanBenefits1}>
              <div className={styles.premiumPlanBenefitsItem} />
              <img className={styles.vectorIcon2} alt="" src="/vector-5.svg" />
              <div className={styles.frameParent2}>
                <div className={styles.starParent1}>
                  <img
                    className={styles.frameChild2}
                    alt=""
                    src="/star-10-4.svg"
                  />
                  <h1 className={styles.ultraPlan}>Ultra Plan</h1>
                </div>
                <div className={styles.frameParent3}>
                  <div className={styles.monthWrapper}>
                    <div className={styles.month1}>$24,99/month</div>
                  </div>
                  <img
                    className={styles.premiumPlanAdditionalStars}
                    alt=""
                    src="/star-11-4.svg"
                  />
                </div>
                <div className={styles.theUltraPlanIsOurTopTierWrapper}>
                  <div className={styles.theUltraPlan}>
                    The Ultra Plan is our top-tier offering, combining all Metal
                    features with the highest transaction limits, concierge
                    services, and VIP experiences. The ultimate choice for
                    individuals seeking unparalleled banking luxury and
                    exclusivity.
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

export default PrivacyPolicy;
