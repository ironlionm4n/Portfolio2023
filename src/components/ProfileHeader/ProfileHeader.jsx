import React, { useState } from "react";
import ProfilePicture from "../../assets/ProfilePicture.jpg";
import { useNavigateContext } from "../../NavigateContext";
import styles from "./ProfileHeader.module.css";
import BurgerMenu from "../Pages/NavigationButton/BurgerMenu";

const ProfilePictureTitle = () => {
  const navigate = useNavigateContext();
  const [isHovered, setIsHovered] = useState(false);

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsHovered(false), 300);
  };

  const imageClassName = isHovered
    ? `${styles.profileImage} ${styles.transformed}`
    : styles.profileImage;

  return (
    <div className={styles.headerContainer}>
      <img
        src={ProfilePicture}
        className={imageClassName}
        alt="Profile"
        onClick={() => navigate("/")}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      />
      <div className={styles.headerTitle}>
        <div className={styles.headerName}>
          <span>Mikail Miller</span>
        </div>
        <div className={styles.headerTagline}>
          <span>React and Unity Game Developer</span>
        </div>
      </div>
      <BurgerMenu />
    </div>
  );
};

const ProfileHeader = () => {
  return <ProfilePictureTitle />;
};

export default ProfileHeader;
