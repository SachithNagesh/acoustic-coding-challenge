import React from 'react';
import Article from './components/Article/Article'
import Header from './layout/Header'
import Footer from './layout/Footer'

const API_URL = `${process.env.REACT_APP_BASE_URI}/api/${process.env.REACT_APP_CONTENT_HUB_ID}/delivery/v1/content/${process.env.REACT_APP_CONTENT_ID}`;

function App() {


  return (
    <div>
      <Header/>
      <Article url={API_URL} />
      <Footer/>
    </div>
  )

}

export default App;
