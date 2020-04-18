import React from 'react'
import { Book, Settings, Camera, Compose, Heart, Info } from 'react-bytesize-icons';

import iconStyles from './icon.module.css'    

const Icon = ( {category} ) => {
    
let style
switch(category) {
    case "vectors":
        style = {"--cat-color": "var(--vector-category)"}
      break;
    case "fonts":
        style = {"--cat-color": "var(--font-category)"}
      break;
    case "photos":
        style = {"--cat-color": "var(--photo-category)"}
        break;
    case "illustrations":
        style = {"--cat-color": "var(--illustration-category)"}
    break;
    case "icons":
        style = {"--cat-color": "var(--icon-category)"}
    break;
    case "tools":
        style = {"--cat-color": "var(--tool-category)"}
    break;
}
    
    return (
        <div className={iconStyles.icon} style={style}>
            {category === "photos" && <Camera />}
            {category === "illustrations" && <Compose />}
            {category === "vectors" && <Heart />}
            {category === "fonts" && <Book />}
            {category === "icons" && <Info />}
            {category === "tools" && <Settings />}
        </div>
    )
}

export default Icon
