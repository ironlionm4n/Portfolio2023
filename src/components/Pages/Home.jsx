import React from 'react'
import styles from './Pages.module.css'


export const Home = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.baseContainer}>
        <div className={styles.contentContainer}>
          <h1>Biography</h1>
          <h2>
            Early Years
          </h2>
          <div className={styles.contentHomeParagraph}>
            <p>
              Growing up I was an avid video game player - mostly on console.
              We did not have a computer in the house growing up and it wasn't until my early twenties when I had my own computer.
            </p>
            <p>
              At first my computer only servered the function of playing video games. But when the pandemic struct, and we were in lockdowns, I began to search for new hobbies.
              Having loved art as a youth, I decided to get back into it. One thing led to another and I stumbled on the Unity Game Engine and the possibility of creating games.
              Having no technical experience at all I was shocked to find how passionately I felt about making games. It felt so exhilirating to simply follow a tutorial and interact
              with the creation.
            </p>
            <p>
              Next came a wild idea. At the time I was working as a Research Analyst for a freight company. I was deeply unhappy and experiencing intense stress and anxiety. Having never
              pursuing my degree after high school I had this feeling of an empty void for a long time. I began to explore the possibile degrees at the colleges near by. When I stumbled on
              Kennesaw State University and their Bachelor of Science in Game Development and Design I just knew that was what I wanted to study. Fast forward a few years later I am approaching
              my graduation date. I am so proud of myself for pursuing my education and reaching this important milestone. It was a very difficult journey but totally worth it in the end.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
