import React from 'react'
import NavBar from '../Components/NavBar'
import Header from '../Components/Header'
import BlogList from '../Components/BlogList'
import NewsLetter from '../Components/NewsLetter'
import Footer from '../Components/Footer'

function Home() {
  return (
    <>
        <NavBar/>
        <Header/>
        <BlogList/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Home
