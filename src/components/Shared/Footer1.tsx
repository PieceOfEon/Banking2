import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Footer1.module.css";

export interface Footer1Type {
  className?: string;
  background?: string;
  group18?: string;
  component8?: string;
  group17?: string;
  linkCount?: string;
  
  /** Style props */
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
};

const Footer1: FunctionComponent<Footer1Type> = ({
  className = "",
  background,
  group18,
  component8,
  group17,
  linkCount,
  
  propAlignSelf,
  propWidth,
}) => {
  const footerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
    };
  }, [propAlignSelf, propWidth]);

  return (
    <footer
      className={[styles.footer, className].join(" ")}
      style={footerStyle}
    >
      <div className={styles.footerContent}>
      <div className={styles.footerImageContainer}>
          <img className={styles.footer2} src="/backgroundNEW.png" alt=""/>
          </div>
          <div className={styles.rectangleParent}>
          <img
            className={styles.frameItem}
            loading="lazy"
            alt=""
            src={group18} //Facebook ААААААААА
          />
          <div className={styles.socialMedia}>
            <b className={styles.ourSocialMedia}>Our social media</b>
            <img
              className={styles.component8Icon}
              loading="lazy"
              alt=""
              src={component8} //Logotip
            />
          </div>
        </div>
        <img
          className={styles.footerContentChild}
          loading="lazy"
          alt=""
          src={group17} //X
        />
        <div className={styles.rectangleGroup}>
          <div className={styles.frameInner} />
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src={linkCount} // Inst
          /> 
        </div>
        
      
      </div>
      <div className={styles.contactDetailsParent}>
        <div className={styles.contactDetails}>
          <b className={styles.aboutTheBank}>About the Bank</b>
          <div className={styles.component9}>
            <div className={styles.contactInformation}>Contact Information</div>
          </div>
          <div className={styles.component10}>
            <div className={styles.contactInformation1}>Security</div>
          </div>
          <div className={styles.component11}>
            <div className={styles.contactInformation2}>Careers</div>
          </div>
          <div className={styles.component12}>
            <div className={styles.contactInformation3}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.supportDetailsWrapper}>
          <div className={styles.supportDetails}>
            <b className={styles.support}>Support</b>
            <div className={styles.component91}>
              <div className={styles.contactInformation4}>FAQ</div>
            </div>
            <div className={styles.component101}>
              <div className={styles.contactInformation5}>
                Online Support Chat
              </div>
            </div>
            <div className={styles.component111}>
              <div className={styles.contactInformation6}>
                Technical Support Contacts
              </div>
            </div>
            <div className={styles.component121}>
              <div className={styles.contactInformation7} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
