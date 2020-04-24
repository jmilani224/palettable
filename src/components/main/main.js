import React from 'react'

import mainStyles from './main.module.css'

const Main = () => {

    return (
        <div className={mainStyles.container}>
            <img src="https://twemoji.maxcdn.com/2/svg/1f3a8.svg" className={mainStyles.emoji} alt=""/>
            {/* <span role="img" aria-label='Pallette Emoji' className={mainStyles.emoji}>🎨</span> */}
            <h1>Palettable</h1>
            <h2>Free Creative Assets and Tools for Developers</h2>
        </div>
    )
}

export default Main


