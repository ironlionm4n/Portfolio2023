import React from "react";
import styles from "./Pages.module.css";

export const Contact = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.baseContainer}>
        <div className={styles.contentContainer}>
          <div>
            <h2>Email</h2>
            <span>MikailSMiller@gmail.com</span>
          </div>
          <div>
            <a href="https://github.com/ironlionm4n" target="blank">
              <span>GitHub</span>
            </a>
          </div>
          <div>
            <a href="https://ironlionm4n.itch.io/" target="blank">
              <span>Play my games!</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
