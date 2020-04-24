import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout/layout';

import supportStyles from './support.module.css';

const SupportPage = () => (
  <Layout>
    <div className={supportStyles.container}>
      <h2>Support This Site</h2>
      <p>Every developer has a monster bookmarks folder - endless lists of resources, articles, tools, and inspiration. This site is an attempt to collect and organize some of those bookmarks in a way that's easy to browse, contribute to, and share. If you have a site you'd like to add to the list, check out the <Link to="/contribute">Contribute</Link> section. And if you've found the site useful, you can always send a coffee my way.</p>
      <p>Thanks for visiting!</p>
      <a className={supportStyles.bmcButton} target="_blank" rel="noopener noreferrer" href="https://www.buymeacoffee.com/palettable">
        <img src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg" alt="Buy me a coffee" />
        <span style={{ 'margin-left': '15px' }}>Buy me a coffee</span>
      </a>
    </div>
  </Layout>
);

export default SupportPage;
