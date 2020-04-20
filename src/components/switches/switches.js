import React, { useEffect } from 'react'

import Switch from '../switch/switch.js'

import switchesStyles from './switches.module.css'

const AllSwitches = ({ setAll, handleAll, handlePhotos, handleIllustrations, handleVectors, handleFonts, handleIcons, handleTools, all, photos, illustrations, vectors, fonts, icons, tools }) => {

    
    useEffect(() => {
        if (photos && illustrations && vectors && fonts && icons && tools) {
            setAll(true)
        }
        if (!photos && !illustrations && !vectors && !fonts && !icons && !tools) {
            setAll(false)
        }
    }, [photos, illustrations, vectors, fonts, icons, tools])


    return (
        <div className={switchesStyles.container}>
            <Switch label="All" color="#dedddd" checked={all} func={handleAll}/>
            <Switch label="Photos" color="var(--photo-category)" checked={photos} func={handlePhotos}/>
            <Switch label="Illustrations" color="var(--illustration-category)" checked={illustrations} func={handleIllustrations}/>
            <Switch label="Vectors" color="var(--vector-category)" checked={vectors} func={handleVectors}/>
            <Switch label="Fonts" color="var(--font-category)" checked={fonts} func={handleFonts}/>
            <Switch label="Icons" color="var(--icon-category)" checked={icons} func={handleIcons}/>
            <Switch label="Tools" color="var(--tool-category)" checked={tools} func={handleTools}/>
        </div>
    )
}

export default AllSwitches
