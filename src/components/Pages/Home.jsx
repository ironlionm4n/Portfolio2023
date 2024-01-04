import React from "react";
import styles from "./Pages.module.css";

export const Home = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.baseContainer}>
        <div className={styles.contentContainer}>
          <h1 className={styles.contentHeader}>About Me</h1>
          <div className={styles.contentHomeParagraph}>
            <p>
              I am a Unity game developer/educator and a Front-end developer.
              Currently pursuing a Bachelor of Science in Game Development and
              Design at Kennesaw State University. I started working as an
              intern for a local parking company in 2023 and had no experience
              in front-end development. Thankfully, they paid for some online
              courses through Udemy and Udacity to help me learn quickly. After
              2 months of training I began to work on the production React
              Native mobile application. Soon we began to develop 2 new systems
              intended to replace current 3rd party solutions for all parking
              location operations.
            </p>
            <h3>Professional Experience</h3>
            <h4>
              Frontend Developer at Park `N Fly - January 2022 - July 2023
            </h4>
            <strong>React</strong>
            <p>
              Using React I worked on 2 systems - Kiosk and Cashier Station
              applications. The Kiosk application was used to gain entry to the
              parking area. This could be that the customer is pulling up and
              grabbing a ticket or they are scanning a QR code or Barcode with
              reservation information. Scanning was done through a camera and if
              the reservation was found as a result of an API call then the gate
              arm would be lifted. Upon exiting the lot, the same ticket used at
              entry would be scanned and display reservation details. The
              customer would then need to pay with a card to exit the lot. The
              Cashier Station application was used for various tasks for
              day-to-day operations. Creating new customer tickets, adding on
              auxillary services available at the location, editing existing
              details, applying coupons and discounts, retrieving reports, and
              processing payments.
            </p>
            <p>
              On all of these systems, I participated in the entire process of
              the development life cycle. Requirements gathering was something
              that I took the initiative on. Spent many hours with different
              internal customers getting experience with what their needs were
              and collected information to distill back to the rest of the
              developers. During the development phase, I was very productive in
              creating the user interface elements and different pages for each
              application. I handled things like state management, user
              experience, application navigation, page composition,
              interactivity, and feedback. Throughout the lifecycle of these
              applications, I was sure to be heavily involved in testing
              components and integration. We used Jira to track user stories,
              bugs, and other outstanding issues. We used an Agile methodology
              and participated in daily standups and monthly sprints.
            </p>
            <strong>React Native</strong>
            <p>
              We targeted iOS and Android devices for the consumer application.
              This application was used to create reservations, pay ahead of
              time, gain ticket information, and access/exit parking lots. I
              helped integrate Google Analytics using React Native Firebase. Fix
              issues with bugs such as incorrect icons being fetched from
              backend, fixing api call for account information editing, and
              general user experience bugs. This application was developed by a
              3rd party years before I began working at this company. This
              presented a great opportunity to work with legacy codebase and
              enhance my ability to read and comprehend code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
