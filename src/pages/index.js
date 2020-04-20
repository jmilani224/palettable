import React, { useState, useEffect } from "react"
import '../styles/index.css'

import Layout from "../components/layout/layout.js"
import Main from "../components/main/main.js"
import AllSwitches from "../components/switches/switches.js"
import CardContainer from '../components/cardContainer/cardContainer.js'

  const IndexPage = () => {
    
    const [all, setAll] = useState(true);
    const [photos, setPhotos] = useState(true);
    const [illustrations, setIllustrations] = useState(true);
    const [vectors, setVectors] = useState(true);
    const [fonts, setFonts] = useState(true);
    const [icons, setIcons] = useState(true);
    const [tools, setTools] = useState(true);
    
    const handleAll = () => {
      setAll(all => !all)
    };

    useEffect(() => {
      if (all) {
          setPhotos(true)
          setIllustrations(true)
          setVectors(true)
          setFonts(true)
          setIcons(true)
          setTools(true)
      } else {
          setPhotos(false)
          setIllustrations(false)
          setVectors(false)
          setFonts(false)
          setIcons(false)
          setTools(false)
      };
    }, [all])

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
        handleAll={handleAll}
        handlePhotos={handlePhotos}
        handleIllustrations={handleIllustrations}
        handleVectors={handleVectors}
        handleFonts={handleFonts}
        handleIcons={handleIcons}
        handleTools={handleTools}

        all={all}
        photos={photos}
        illustrations={illustrations}
        vectors={vectors}
        fonts={fonts}
        icons={icons}
        tools={tools}
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
