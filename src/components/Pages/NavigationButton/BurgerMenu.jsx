import React, { useState } from "react";
import NavigationButton from "./NavigationButton";
import styles from "./NavigationButton.module.css";
import BurgerButton from "./BurgerButton";

const BurgerMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        ☰
        {isMenuOpen && (
          <div className={styles.menu}>
            <BurgerButton text="Game Dev" to={"/game-dev-portfolio"} />
            <BurgerButton text="Front-End" to={"/front-end-portfolio"} />
            <BurgerButton text="Contact" to={"/contact"} />
          </div>
        )}
      </div>

      <div className={styles.navigationButtonsContainer}>
        <NavigationButton text="Game Development" to={"/game-dev-portfolio"} />
        <NavigationButton text="Front-End" to={"/front-end-portfolio"} />
        <NavigationButton text="Contact" to={"/contact"} />
        <NavigationButton text="Home" to={"/"} />
      </div>
    </div>
  );
};

export default BurgerMenu;
