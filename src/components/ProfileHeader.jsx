import React from "react";

import ProfilePicture from "../assets/ProfilePicture.jpg"
import ContentButton from "./ContentButton";

const ProfileDiv = ({children, gapValue}) => {
    return (
        <div style={{ display: "flex", alignItems: "center", gap: gapValue,}}>{children}</div>
    )
}

const ProfilePictureTitle = () =>

    <div style={{display: "flex", alignItems: "center", width: "100%", backgroundColor: "rgb(50,125,150,1)"}}>
        <ProfileDiv gapValue={"24px"}>
            <img src={ProfilePicture} alt="Profile Picture" style={{ width: "250px" }} />
            <div>
                <h1>Mikail Miller</h1>
                <h2>React and Unity Game Developer</h2>
            </div>
        </ProfileDiv>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", minWidth: "55%", justifyContent: "space-between", paddingLeft: "5rem", paddingRight: "3rem"}}> 
            <ContentButton text="About Me" />
            <ContentButton text="About Me" />
            <ContentButton text="About Me" />
        </div>
    </div>;

const ProfileHeader = () => {

    return (
        <div>
            {ProfilePictureTitle()}
        </div>

    )
}

export default ProfileHeader;