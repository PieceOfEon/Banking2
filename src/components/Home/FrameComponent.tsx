import { FunctionComponent } from "react";
import TestimonialRowOne from "../TestimonialRowOne";
import Label from "../Label";
import styles from "./FrameComponent.module.css";

export interface FrameComponentType {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.testimonialContainerParent, className].join(" ")}>
      <div className={styles.testimonialContainer}>
        <h1 className={styles.whatOurUsersContainer}>
          <span>{`What our `}</span>
          <span className={styles.users}>Users</span>
          <span> say</span>
        </h1>
      </div>
      <div className={styles.testimonialGridParent}>
        <div className={styles.testimonialGrid}>
          <TestimonialRowOne
            loveTheQuickResponseTimes="Love the quick response times and friendly service! Always a pleasure to deal with your staff."
            change="/ellipse-86@2x.png"
            sarahJohnson="Sarah Johnson"
            happyCust01="@happy_cust01"
            theMobileAppIsFantasticAn="The mobile app is fantastic and very user-friendly. It makes managing my finances so convenient!"
            label1="/ellipse-86-1@2x.png"
            michaelSmith=" Michael Smith"
            techSavvy="@tech_savvy "
          />
          <TestimonialRowOne
            loveTheQuickResponseTimes={`Great rewards program on your credit cards, very pleased! The variety of options for redeeming points is excellent."`}
            change="/ellipse-86-2@2x.png"
            sarahJohnson="David Brown"
            happyCust01="@rewards_fan"
            theMobileAppIsFantasticAn="Customer support resolved my issue quickly and professionally. Very satisfied with the assistance I received."
            label1="/ellipse-86-3@2x.png"
            michaelSmith="Jessica Martinez"
            techSavvy="@support_star"
          />
        </div>
        <div className={styles.loanExperience}>
          <Label
            websitenet="/star-10.svg"
            label="/star-11-5.svg"
            hadAGreatExperienceWithYo={`Had a great experience with your loan process; it was quick and efficient. The communication was clear and helpful."`}
            title="/ellipse-86-4@2x.png"
            emilyDavis="Emily Davis"
            loanWiz="@loan_wiz "
          />
          <Label
            websitenet="/star-10-10.svg"
            label="/star-11-10.svg"
            hadAGreatExperienceWithYo="Your branches are always clean and welcoming. The staff is incredibly helpful and friendly."
            title="/ellipse-86-5@2x.png"
            emilyDavis="John Wilson "
            loanWiz="@branch_visitor"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
