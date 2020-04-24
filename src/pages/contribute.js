import React from 'react'

import Layout from '../components/layout/layout.js'
import Content from '../components/content/content.js'

const Contribute = () => {
    
    return (
        <Layout>
            <Content>
                <h2>Contribute to the Project</h2>
                <p id="para">Have a resource you want to share? Fork the <a href="https://github.com/jmilani224/palettable" target="blank">Github repo</a>, edit the <code>src/data/card-data.json</code> file, and submit a pull request.</p>
                <p>When adding new sites, format <code>categories</code> as an array and include any number of these: <code>photos, illustrations, vectors, fonts, icons, tools</code>.
</p>
            </Content>
        </Layout>
    )
}

export default Contribute
