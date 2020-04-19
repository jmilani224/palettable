import React from 'react'

import Switch from '../switch/switch.js'

import switchesStyles from './switches.module.css'

const AllSwitches = ({ handlePhotos, handleIllustrations, handleVectors, handleFonts, handleIcons, handleTools }) => {

    return (
        <div className={switchesStyles.container}>
            <Switch label="Photos" color="var(--photo-category)" func={handlePhotos}/>
            <Switch label="Illustrations" color="var(--illustration-category)" func={handleIllustrations}/>
            <Switch label="Vectors" color="var(--vector-category)" func={handleVectors}/>
            <Switch label="Fonts" color="var(--font-category)" func={handleFonts}/>
            <Switch label="Icons" color="var(--icon-category)" func={handleIcons}/>
            <Switch label="Tools" color="var(--tool-category)" func={handleTools}/>
        </div>
    )
}

export default AllSwitches
