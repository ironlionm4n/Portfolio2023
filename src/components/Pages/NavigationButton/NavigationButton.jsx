import React from 'react'
import { useNavigateContext } from '../../../NavigateContext'
import styles from './NavigationButton.module.css'

const NavigationButton = ({ text, to }) => {
    const navigate = useNavigateContext();

    return (
        <div className={styles.navButtonContainer} onClick={() => navigate(to)}>
            <button>
                {text}
            </button>
        </div>
    )
}

export default NavigationButton