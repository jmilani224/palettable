import React, { useState, useEffect } from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Card from '../card/card.js'
import Icon from '../icon/icon.js'

import cardContainerStyles from './cardContainer.module.css'


const CardContainer = ({ photos, illustrations, vectors, fonts, icons, tools}) => {
  const [allOff, setAllOff] = useState(false)

  useEffect(() => {
    if (photos || illustrations || vectors || fonts || icons || tools) {
        setAllOff(false)
    } else {
        setAllOff(true)
    }
}, [photos, illustrations, vectors, fonts, icons, tools])
  
  const data = useStaticQuery(graphql`
    {
      allCardDataJson (sort: {fields: name, order: ASC}){
        edges {
          node {
            name
            desc
            href
            categories
          }
        }
      }
    }
  `)

  const parsed = data.allCardDataJson.edges
    return (
        <div className={cardContainerStyles.container}>
            {parsed.map(card => 
            (
              <div className={cardContainerStyles.linkContainer}>
                  <Card
                    title={card.node.name}
                    desc={card.node.desc}
                    categories={card.node.categories}
                    href={card.node.href}
                    photos={photos}
                    illustrations={illustrations}
                    vectors={vectors}
                    fonts={fonts}
                    icons={icons}
                    tools={tools}
                  >
                      {card.node.categories.map(category => (
                          <Icon category={category}/>
                      ))}
                  </Card>
              </div>
            ))}
            <div className={allOff ? cardContainerStyles.noResultsShow : cardContainerStyles.noResultsHide}>Flip a Switch :)</div>
        </div>
    )
}

export default CardContainer
