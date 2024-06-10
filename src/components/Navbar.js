import { Link ,graphql,useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/global.css'
export default function Navbar() {
 const data = useStaticQuery(graphql`
    query SiteInfo{
  site{
    siteMetadata{
      title
    }
  }
}        
  `)
  const {title} = data.site.siteMetadata
  return (
    <nav>
        <h1> {title}<span className='care'>Care+</span></h1>
      <div className='links'>
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/projects">Services</Link>
         <Link to="/news">News</Link>
         <Link to="/projects/test">Contact</Link>
      </div>
    </nav>
   
  )
}

