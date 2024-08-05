import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export interface FrameComponent1Type {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.newsContainerParent, className].join(" ")}>
      <div className={styles.newsContainer}>
        <h1 className={styles.whatsInTheContainer}>
          <span>{`What’s in the `}</span>
          <span className={styles.news}>News</span>
          <span>?</span>
        </h1>
      </div>
      <div className={styles.newsCards}>
        <div className={styles.emailfigmasfakedomainnet}>
          <div className={styles.financeNews}>
            <div className={styles.wrapperSafe}>
              <img
                className={styles.safeIcon}
                loading="lazy"
                alt=""
                src="/safe@2x.png"
              />
            </div>
          </div>
          <div className={styles.appNews}>
            <div className={styles.appNewsChild} />
            <div className={styles.productFeature}>{`Product & feature`}</div>
            <h3 className={styles.veridionBankLaunchesContainer}>
              <p
                className={styles.veridionBankLaunches}
              >{`Veridion Bank Launches New Ultra Plan with Exclusive `}</p>
              <p className={styles.vipBenefits}>VIP Benefits</p>
            </h3>
            <div className={styles.june242024}>June 24, 2024</div>
          </div>
        </div>
        <div className={styles.conversation}>
          <div className={styles.wrapperDiagramWrapper}>
            <div className={styles.wrapperDiagram}>
              <img
                className={styles.diagramIcon}
                loading="lazy"
                alt=""
                src="/diagram@2x.png"
              />
            </div>
          </div>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.productFeature1}>{`Product & feature`}</div>
            <h3 className={styles.veridionExpandsMobileContainer}>
              <p
                className={styles.veridionExpandsMobile}
              >{`Veridion Expands Mobile App Features for Enhanced `}</p>
              <p className={styles.userExperience}>User Experience</p>
            </h3>
            <div className={styles.june102024}>June 10, 2024</div>
          </div>
        </div>
        <div className={styles.avatar}>
          <img
            className={styles.moneyIcon}
            loading="lazy"
            alt=""
            src="/money@2x.png"
          />
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <div className={styles.productFeature2}>{`Product & feature`}</div>
            <h3 className={styles.veridionBankPartners}>
              Veridion Bank Partners with Green Initiatives for Sustainable
              Banking
            </h3>
            <div className={styles.may302024}>May 30, 2024</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
