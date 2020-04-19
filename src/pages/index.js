import React, { useState } from "react"
import '../styles/index.css'

import Layout from "../components/layout/layout.js"
import Main from "../components/main/main.js"
import AllSwitches from "../components/switches/switches.js"
import CardContainer from '../components/cardContainer/cardContainer.js'

  const IndexPage = () => {
    
    const [photos, setPhotos] = useState(true);
    console.log(photos)
    const [illustrations, setIllustrations] = useState(true);
    const [vectors, setVectors] = useState(true);
    const [fonts, setFonts] = useState(true);
    const [icons, setIcons] = useState(true);
    const [tools, setTools] = useState(true);

    const handlePhotos = () => {
      setPhotos(photos => !photos)
    };

    const handleIllustrations = () => {
      setIllustrations(illustrations => !illustrations)
    };

    const handleVectors = () => {
      setVectors(vectors => !vectors)
    };  

    const handleFonts = () => {
      setFonts(fonts => !fonts)
    };

    const handleIcons = () => {
      setIcons(icons => !icons)
    };

    const handleTools = () => {
      setTools(tools => !tools)
    };

    return (
    <Layout>

      <Main />

      <AllSwitches
        handlePhotos={handlePhotos}
        handleIllustrations={handleIllustrations}
        handleVectors={handleVectors}
        handleFonts={handleFonts}
        handleIcons={handleIcons}
        handleTools={handleTools}
      />

      <CardContainer 
        photos={photos}
        illustrations={illustrations}
        vectors={vectors}
        fonts={fonts}
        icons={icons}
        tools={tools}
      />

    </Layout>
  )
}

export default IndexPage
