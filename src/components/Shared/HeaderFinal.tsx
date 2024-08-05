import { FunctionComponent, useCallback, useMemo, useState, type CSSProperties } from "react";
import styles from "./HeaderFinal.module.css";
import { useNavigate } from "react-router-dom";


export interface HeaderFinalType {
  className?: string;
  logoPurple?: string;
  logoBlack?: string;
  activePage?: string;

  /** Style props */
  headerFinalAlignSelf?: CSSProperties["alignSelf"];
  headerFinalWidth?: CSSProperties["width"];
};

const HeaderFinal: FunctionComponent<HeaderFinalType> = ({
  className = "",
  logoPurple,
  logoBlack,
  activePage,
  headerFinalAlignSelf,
  headerFinalWidth,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  
  const navigate = useNavigate();

  const signupClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);
  const signinClick = useCallback(() => {
    navigate("/sign-in");
  }, [navigate]);
  const CardsClick = useCallback(() => {
    navigate("/cards");
  }, [navigate]);
  const ServicesClick = useCallback(() => {
    navigate("/services");
  }, [navigate]);
  const BusinessClick = useCallback(() => {
    navigate("/for-business");
  }, [navigate]);
  const AboutUsClick = useCallback(() => {
    navigate("/about-us");
  }, [navigate]);
  const HomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const headerFinalStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: headerFinalAlignSelf,
      width: headerFinalWidth,
    };
  }, [headerFinalAlignSelf, headerFinalWidth]);

  const getNavLinkClass = (page: string) => {
    const isActive = activePage === page;
    return isActive ? styles.active : "";
  };
  

  return (
    <header
      className={[styles.headerFinal, className].join(" ")}
      style={headerFinalStyle}
    >
      <div className={styles.heroLeft}>
        <div className={styles.heroLeftInner}>
          
        <img
          onClick={HomeClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={styles.logoIcon}
          loading="lazy"
          alt="Logo"
          src={isHovered ? logoBlack : logoPurple}
        />
                
        </div>
        <nav className={styles.heroCardContainer}>
          <div className={styles.component4}>
            <a onClick={CardsClick} className={`${styles.cards} ${getNavLinkClass('cards')}`}>Cards</a>
          </div>
          <div className={styles.component5}>
            <a onClick={ServicesClick} className={`${styles.cards1} ${getNavLinkClass('services')}`}>Services</a>
          </div>
          <div className={styles.component6}>
            <a onClick={BusinessClick} className={`${styles.cards2} ${getNavLinkClass('business')}`}>Business</a>
          </div>
          <div className={styles.component7}>
            <a onClick={AboutUsClick} className={`${styles.cards3} ${getNavLinkClass('aboutus')}`}>About Us</a>
          </div>
        </nav>
      </div>
      <div className={styles.heroAuth}>
        <button className={styles.signIn}>
          <a onClick={signinClick} className={styles.signIn1}>Sign In</a>
        </button>
        <button className={styles.signUp}>
          <a onClick={signupClick} className={styles.singUp}>Sign Up</a>
        </button>
      </div>
    </header>
  );
};

export default HeaderFinal;
