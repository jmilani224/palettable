import React, { useEffect } from 'react'

import cardStyles from './card.module.css'

const Card = ({ title, desc, photos, categories, children }) => {

    useEffect(() => {
        photos && categories.includes("photos") ? cardStyles.container : cardStyles.containerHide
    }, [photos])

    return (
        <div className={photos && categories.includes("photos") ? cardStyles.container : cardStyles.containerHide}>
            <div className={cardStyles.title}>
                <h3>{title}</h3>
            </div>
            <div className={cardStyles.desc}>
                <p>{desc}</p>
            </div>
            <div className={cardStyles.iconContainer}>
                {children}
            </div>
        </div>
    )
}

export default Card
