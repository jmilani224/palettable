import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';
import Content from '../components/content/content.js'
import CoffeeBtn from '../components/coffeebtn/coffeebtn.js'

const SupportPage = () => (
  <Layout>
    <Content>
      <h2>Support This Site</h2>
      <p>Every developer has a monster bookmarks folder - endless lists of resources, articles, tools, and inspiration. This site is an attempt to collect and organize some of those bookmarks in a way that's easy to browse, contribute to, and share. If you have a site you'd like to add to the list, check out the <Link to="/contribute">Contribute</Link> section. And if you've found the site useful, you can always send a coffee my way.</p>
      <p>Thanks for visiting!</p>
      <CoffeeBtn />
    </Content>
  </Layout>
);

export default SupportPage;
