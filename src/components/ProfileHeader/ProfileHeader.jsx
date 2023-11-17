import React from "react";
import ProfilePicture from "../../assets/ProfilePicture.jpg"
import NavigationButton from "../Pages/NavigationButton/NavigationButton";
import styles from './ProfileHeader.module.css'

const ProfilePictureTitle = () => {
    return (
        <div className={styles.headerContainer}>
            <img src={ProfilePicture} className={styles.profileImage} alt="Profile" />
            <div className={styles.headerTitle}>
                <div className={styles.headerName} >
                    <span>Mikail Miller</span>
                </div>
                <div className={styles.headerTagline} >
                    <span>React and Unity Game Developer</span>
                </div>
            </div>
            <div className={styles.navigationButtonsContainer}>
                <NavigationButton text="Game Development" to={"/game-dev-portfolio"} />
                <NavigationButton text="Front-End" to={"/front-end-portfolio"} />
                <NavigationButton text="Contact" to={"/contact"} />
                <NavigationButton text="Home" to={"/"} />
            </div>
        </div>
    )
}


const ProfileHeader = () => {

    return (
        <ProfilePictureTitle />
    )
}

export default ProfileHeader;