import { FunctionComponent, useState } from "react";
import FieldLabels from "../Shared/FieldLabels";
import SubmitButton from "../SubmitButton";
import styles from "./FormContainer.module.css";

export interface FormContainerType {
  className?: string;
};

const FormContainer: FunctionComponent<FormContainerType> = ({
  className = "",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => {
    setShowPassword(prevState => !prevState);
  };
  return (
    <form className={[styles.formContainer, className].join(" ")}>
      <h1 className={styles.signUp}>Sign up</h1>
      <div className={styles.inputFields}>
        <FieldLabels
          fullName="Full Name"
          enterYourFullNamePlacehol="Enter your full name"
        />
        <FieldLabels
          fullName="Phone number"
          enterYourFullNamePlacehol="Enter your phone number"
        />
        <FieldLabels
          fullName="Email address"
          enterYourFullNamePlacehol="Enter your email"
        />
        <FieldLabels
          fullName="Password"
          enterYourFullNamePlacehol="Enter your password"
          inputType={showPassword ? "text" : "password"}
        />
        <FieldLabels
          fullName="Confirm password"
          enterYourFullNamePlacehol="Confirm your password"
          inputType={showPassword ? "text" : "password"}
        />
        <div className={styles.passwordToggle}>
          <input
            className={styles.toggle}
            type="checkbox"
            checked={showPassword}
            onChange={handleToggle}
          />
          <div className={styles.showPassword}>Show password</div>
        </div>
      </div>
      <SubmitButton singUp="Sing Up" vector="/vector.svg" />
    </form>
  );
};

export default FormContainer;
