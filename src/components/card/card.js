import React from 'react'

import cardStyles from './card.module.css'

const Card = () => {
    return (
        <div className={cardStyles.container}>
            <div className={cardStyles.icon}>O</div>
            <div className={cardStyles.title}>
                <h3>Google Fonts</h3>
            </div>
            <div className={cardStyles.desc}>
                <p>Hundreds of free fonts, hosted by Google.</p>
            </div>
        </div>
    )
}

export default Card
