import {useState } from "react";
import styles from "../../pages/FAQ.module.css";

const Droplist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.frameGroup}>
      <div className={styles.whatIsVeridionParent} onClick={toggleAccordion}>
        <div className={styles.whatIsVeridion}>What is Veridion?</div>
        <img
          className={styles.vector24Stroke}
          loading="lazy"
          alt=""
          src="/vector-24-stroke.svg"
        />
      </div>
      {isOpen && (
        <div className={styles.veridionIsA}>
          Veridion is a comprehensive online banking platform offering a
          range of financial services, including checking and savings
          accounts, loans, investment opportunities, and more.
        </div>
      )}
    </div>
  );
};

export default Droplist;

