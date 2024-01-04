import React from "react";
import { useNavigateContext } from "../../../NavigateContext";
import styles from "./NavigationButton.module.css";

const BurgerButton = ({ text, to }) => {
  const navigate = useNavigateContext();

  return (
    <div className={styles.burgerButtonContainer} onClick={() => navigate(to)}>
      <button>{text}</button>
    </div>
  );
};

export default BurgerButton;
