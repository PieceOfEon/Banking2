import { FunctionComponent } from "react";
import styles from "./BankHistory.module.css";

export interface BankHistoryType {
  className?: string;
};

const BankHistory: FunctionComponent<BankHistoryType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.bankHistory, className].join(" ")}>
      <div className={styles.historyContentParent}>
        <div className={styles.historyContent}>
          <div className={styles.historyBlock}>
            <h1 className={styles.bankHistory1}>
              <span>{`Bank `}</span>
              <span className={styles.history}>History</span>
            </h1>
            <div className={styles.ratingContainer}>
              <div className={styles.ratingStars}>
                <img
                  className={styles.starOneIcon}
                  loading="lazy"
                  alt=""
                  src="/star-8.svg"
                />
                <div className={styles.vectorParent}>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="/ellipse-89.svg"
                  />
                  <img
                    className={styles.starTwoIcon}
                    loading="lazy"
                    alt=""
                    src="/star-71.svg"
                  />
                  <img
                    className={styles.starThreeIcon}
                    loading="lazy"
                    alt=""
                    src="/star-91.svg"
                  />
                  <img
                    className={styles.starFourIcon}
                    alt=""
                    src="/star-four.svg"
                  />
                  <img
                    className={styles.starFiveIcon}
                    loading="lazy"
                    alt=""
                    src="/star-111.svg"
                  />
                </div>
                <img
                  className={styles.starSixIcon}
                  loading="lazy"
                  alt=""
                  src="/star-61.svg"
                />
              </div>
              <div className={styles.veridionBankHas}>
                Veridion Bank has been a trusted financial partner since its
                founding in 2022. Although relatively new, we have quickly grown
                into a leading financial institution with a presence across
                multiple regions. Our journey is marked by a commitment to
                innovation, customer-centric services, and a dedication to
                fostering economic growth within the communities we serve. From
                the beginning, we have embraced technological advancements and
                expanded our product offerings to provide comprehensive
                financial solutions tailored to the evolving needs of our
                clients.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.history1}>
          <div className={styles.group}>
            <div className={styles.group1}>
              <img className={styles.groupIcon} alt="" src="/group1.svg" />
              <img className={styles.groupIcon1} alt="" src="/group-110.svg" />
              <img className={styles.groupIcon2} alt="" src="/group-210.svg" />
              <img className={styles.groupIcon3} alt="" src="/group-310.svg" />
              <img className={styles.groupIcon4} alt="" src="/group-410.svg" />
              <img className={styles.groupIcon5} alt="" src="/group-56.svg" />
              <img className={styles.groupIcon6} alt="" src="/group-61.svg" />
              <img className={styles.groupIcon7} alt="" src="/group-71.svg" />
              <img className={styles.groupIcon8} alt="" src="/group-81.svg" />
              <img className={styles.groupIcon9} alt="" src="/group-91.svg" />
              <img className={styles.groupIcon10} alt="" src="/group-101.svg" />
              <img className={styles.groupIcon11} alt="" src="/group-111.svg" />
              <img className={styles.groupIcon12} alt="" src="/group-121.svg" />
              <img className={styles.groupIcon13} alt="" src="/group-131.svg" />
              <img className={styles.groupIcon14} alt="" src="/group-141.svg" />
              <img className={styles.groupIcon15} alt="" src="/group-151.svg" />
              <img className={styles.groupIcon16} alt="" src="/group-161.svg" />
            </div>
            <img className={styles.groupIcon17} alt="" src="/group-173.svg" />
            <img className={styles.groupIcon18} alt="" src="/group-181.svg" />
            <img className={styles.groupIcon19} alt="" src="/group-192.svg" />
            <img className={styles.groupIcon20} alt="" src="/group-201.svg" />
            <img className={styles.groupIcon21} alt="" src="/group-211.svg" />
            <img className={styles.groupIcon22} alt="" src="/group-221.svg" />
            <img className={styles.groupIcon23} alt="" src="/group-231.svg" />
            <img className={styles.groupIcon24} alt="" src="/group-242.svg" />
            <img className={styles.groupIcon25} alt="" src="/group-251.svg" />
            <img className={styles.groupIcon26} alt="" src="/group-261.svg" />
            <img className={styles.groupIcon27} alt="" src="/group-271.svg" />
            <img className={styles.groupIcon28} alt="" src="/group-281.svg" />
            <img className={styles.groupIcon29} alt="" src="/group-291.svg" />
            <img className={styles.groupIcon30} alt="" src="/group-301.svg" />
            <img className={styles.groupIcon31} alt="" src="/group-311.svg" />
            <img className={styles.groupIcon32} alt="" src="/group-321.svg" />
            <img className={styles.groupIcon33} alt="" src="/group-331.svg" />
            <img className={styles.groupIcon34} alt="" src="/group-341.svg" />
            <img className={styles.groupIcon35} alt="" src="/group-351.svg" />
            <img className={styles.groupIcon36} alt="" src="/group-361.svg" />
            <img className={styles.groupIcon37} alt="" src="/group-371.svg" />
            <img className={styles.groupIcon38} alt="" src="/group-381.svg" />
            <img className={styles.groupIcon39} alt="" src="/group-391.svg" />
            <img className={styles.groupIcon40} alt="" src="/group-401.svg" />
            <img className={styles.groupIcon41} alt="" src="/group-411.svg" />
            <img className={styles.groupIcon42} alt="" src="/group-421.svg" />
            <img className={styles.groupIcon43} alt="" src="/group-431.svg" />
            <img className={styles.groupIcon44} alt="" src="/group-441.svg" />
            <img className={styles.groupIcon45} alt="" src="/group-451.svg" />
            <img className={styles.groupIcon46} alt="" src="/group-461.svg" />
            <img className={styles.groupIcon47} alt="" src="/group-471.svg" />
            <img className={styles.groupIcon48} alt="" src="/group-481.svg" />
            <img className={styles.groupIcon49} alt="" src="/group-491.svg" />
            <img className={styles.groupIcon50} alt="" src="/group-501.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankHistory;
