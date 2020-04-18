import React from 'react'

import cardStyles from './card.module.css'

const Card = ({ title, desc, children }) => {
    return (
        <div className={cardStyles.container}>
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
