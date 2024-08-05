import { FunctionComponent } from "react";
import styles  from "./GetStarted.module.css";
import FrameComponent2 from "./FrameComponent2";

const GetStarted: FunctionComponent = () => {
    return (
      <div className={styles.getStarted}>
        <FrameComponent2/>
        <div>
            {/* <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group.svg"
            ></img> */}
            <img src="/Groupfull.svg"></img>
        </div>
        
      </div>
    );
  }





export default GetStarted;