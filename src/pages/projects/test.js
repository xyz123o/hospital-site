import React from 'react'
import Layout from '../../components/Layout'
import {contactContainer ,contactTitle} from '../../styles/contact.module.css'

export default function Test() {
  return (
    <Layout>
       <div className={contactTitle}>What Our Customer Say</div>
       <div className={contactContainer}>
          <div>
               Review
          </div>
          <div>
               Review
          </div>
       
       </div>
    </Layout>
    
  )
}
