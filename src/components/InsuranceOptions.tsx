import { FunctionComponent } from "react";
import FundContent from "./FundContent";
import FeatureRows from "./FeatureRows";
import styles from "./InsuranceOptions.module.css";

export interface InsuranceOptionsType {
  className?: string;
};

const InsuranceOptions: FunctionComponent<InsuranceOptionsType> = ({
  className = "",
}) => {
  return (
    <div className={[styles.insuranceOptions, className].join(" ")}>
      <FundContent
        fundIllustration="/hero-image.svg"
        plan="/flower.svg"
        mutualFunds="Term Life:"
        diversifiedPortfoliosMana="Affordable coverage for a specific period of life."
        propAlignSelf="unset"
        propWidth="25.313rem"
      />
      <FeatureRows
        house="/pension.svg"
        retirementAcc="Whole Life:"
        planForASecureFutureWithO="Permanent protection with cash value accumulation."
        propPadding="24px 31px 45px 32px"
        propGap="11.5px"
        propWidth="25.313rem"
        propFlex="unset"
      />
      <FeatureRows
        house="/house.svg"
        retirementAcc="Universal Life: "
        planForASecureFutureWithO="Flexible premiums and investment components."
        propPadding="23px 31px 45px 32px"
        propGap="12.5px"
        propWidth="25.313rem"
        propFlex="unset"
      />
    </div>
  );
};

export default InsuranceOptions;
