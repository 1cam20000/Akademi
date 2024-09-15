import React from 'react'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Section from '../components/Section'
import Article from '../components/Article'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <Aside />
        <Section/>
        <Article />
        <Footer />
    </div>
  )
}

export default Home