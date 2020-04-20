import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Card from '../card/card.js'
import Icon from '../icon/icon.js'

import cardContainerStyles from './cardContainer.module.css'


const CardContainer = ({ photos, illustrations, vectors, fonts, icons, tools}) => {
    
  const data = useStaticQuery(graphql`
    {
      allCardDataJson {
        edges {
          node {
            name
            desc
            href
            id
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
                    photos={photos}
                    illustrations={illustrations}
                    vectors={vectors}
                    fonts={fonts}
                    icons={icons}
                    tools={tools}
                    categories={card.node.categories}
                    href={card.node.href}
                  >
                      {card.node.categories.map(category => (
                          <Icon category={category}/>
                      ))}
                  </Card>
              </div>
            ))}
            
        </div>
    )
}

export default CardContainer
