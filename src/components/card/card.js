import React, { useState, useEffect } from 'react'

import cardStyles from './card.module.css'

const Card = ({ title, desc, href, categories, photos, illustrations, vectors, fonts, icons, tools, children }) => {

    const [show, setShow] = useState(false)

    const showHandler = () => {
        if (photos && categories.includes("photos")) {
            setShow(true)
        } else if (illustrations && categories.includes("illustrations")) {
            setShow(true)
        } else if (vectors && categories.includes("vectors")) {
            setShow(true)
        } else if (fonts && categories.includes("fonts")) {
            setShow(true)
        } else if (icons && categories.includes("icons")) {
            setShow(true)
        } else if (tools && categories.includes("tools")) {
            setShow(true)
        } else {
            setShow(false)
        }
    }

    useEffect(() => {
        showHandler()
    }, [photos, illustrations, vectors, fonts, icons, tools])

    return (
        <a target="blank" href={href}>
            <div className={show ? cardStyles.container : cardStyles.containerHide}>
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
        </a>
    )
}

export default Card
