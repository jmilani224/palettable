import React from 'react'

import Switch from '../switch/switch.js'
import { Camera } from 'react-bytesize-icons';

import switchesStyles from './switches.module.css'

const AllSwitches = () => {
    return (
        <div className={switchesStyles.container}>
            <Switch icon={Camera} label="Photos" color="var(--photo-category)"/>
            <Switch icon={Camera} label="Illustrations" color="var(--illustration-category)"/>
            <Switch icon={Camera} label="Vectors" color="var(--vector-category)"/>
            <Switch icon={Camera} label="Fonts" color="var(--font-category)"/>
            <Switch icon={Camera} label="Icons" color="var(--icon-category)"/>
            <Switch icon={Camera} label="Tools" color="var(--tool-category)"/>
        </div>
    )
}

export default AllSwitches
