import React from 'react'

import contentStyles from './content.module.css'

const Content = ({ children }) => {
    return (
      <div className={contentStyles.container}>
          {children}
    </div>
    )
}

export default Content
