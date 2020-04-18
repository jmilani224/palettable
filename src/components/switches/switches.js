import React from 'react'

import Switch from '../switch/switch.js'

import switchesStyles from './switches.module.css'

const AllSwitches = () => {
    return (
        <div className={switchesStyles.container}>
            <Switch label="Photos" color="var(--photo-category)"/>
            <Switch label="Illustrations" color="var(--illustration-category)"/>
            <Switch label="Vectors" color="var(--vector-category)"/>
            <Switch label="Fonts" color="var(--font-category)"/>
            <Switch label="Icons" color="var(--icon-category)"/>
            <Switch label="Tools" color="var(--tool-category)"/>
        </div>
    )
}

export default AllSwitches
