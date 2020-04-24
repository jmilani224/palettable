import React from 'react'

import coffeebtnStyles from './coffeebtn.module.css'

const CoffeeBtn = () => {
    return (
        <a className={coffeebtnStyles.bmcButton} target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/palettable">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
        <span style={{ 'margin-left': '15px' }}>Buy me a coffee</span>
      </a>
    )
}

export default CoffeeBtn
