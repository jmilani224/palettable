import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import Card from '../card/card.js'
import Icon from '../icon/icon.js'

import cardContainerStyles from './cardContainer.module.css'


const CardContainer = () => {
    
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
            {parsed.map(card => (
              <div className={cardContainerStyles.linkContainer}>
                <a target="blank" href={card.node.href}>
                  <Card title={card.node.name} desc={card.node.desc}>
                    {card.node.categories.map(category => (
                        <Icon category={category}/>
                    ))}
                  </Card>
                </a>
              </div>  
            ))}
            
        </div>
    )
}

export default CardContainer
