import { FunctionComponent } from "react";
import HeaderFinal from "../components/Shared/HeaderFinal";
import ProgressTrackingPlans from "../components/Home/ProgressTrackingPlans";
import ProgressTrackingPlanListSe1 from "../components/Home/ProgressTrackingPlanListSe1";
import ProgressTrackingPlanListSe from "../components/Home/ProgressTrackingPlanListSe";
import BottomFeatures from "../components/Home/BottomFeatures";
import FrameComponent1 from "../components/Home/FrameComponent1";
import FrameComponent from "../components/Home/FrameComponent";
import Footer1 from "../components/Shared/Footer1";
import styles from "./Homepage.module.css";
import GetStarted from "../components/Home/GetStarted";
import ChatManager from "../components/Shared/ChatManager";

const Homepage: FunctionComponent = () => {
  return (
    <div className={styles.homepage}>
      <HeaderFinal logoPurple="/logo.svg" logoBlack="/Property 1=DefaultBlack.svg" />
      <main className={styles.content}>
        <ChatManager/>

        <section className={styles.mainContent}>           
            <GetStarted/>
          <div className={styles.progressTracking}>
            <div className={styles.progressTrackingContent}>
              <h1 className={styles.moreEffectiveWayContainer}>
                <p className={styles.moreEffectiveWay}>
                  <span className={styles.more}>{`More `}</span>
                  <span className={styles.effective}>effective</span>
                  <span>{` way `}</span>
                </p>
                <p className={styles.toTrackProgress}>to track progress</p>
              </h1>
            </div>
            <ProgressTrackingPlans />
            <div className={styles.progressTrackingPlansSecond}>
              <ProgressTrackingPlanListSe1 />
              <ProgressTrackingPlanListSe />
            </div>
          </div>
          <BottomFeatures />
          <FrameComponent1 />
          <FrameComponent />
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

export default Homepage;
