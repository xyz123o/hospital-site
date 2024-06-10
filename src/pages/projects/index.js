import React from 'react'
import Layout from '../../components/Layout'
import { service ,serviceSection ,part } from '../../styles/projects.module.css'
export default function Projects() {
  return (
    <Layout>
      <div>
         <div className={service}>
            Our Services
          </div>  
          <p>
          We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.
            </p>  
            <div className={serviceSection}>
              <div className={part}>
                 <p>Dental Care</p>
              </div>
              <div className={part}>
                <p> Pulmonary</p>
              </div>
              <div className={part}>
                 <p>Neurological</p>
              </div>
              <div className={part}>
                <p>Prediatrics</p>
              </div>
              </div>             
        
      </div>
    </Layout>

  )
}


