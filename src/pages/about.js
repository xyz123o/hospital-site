import React from 'react'
import Layout from '../components/Layout'
import { mainContainer ,btn ,secondContainer ,square} from '../styles/about.module.css'
export default function About() {
    return (
        <Layout>
            <div className={mainContainer}>
            <div>
                <h1>Clinic With Innovative</h1>
                <p> We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
                <button className={btn}>Learn More</button>
            </div>
            <div className={secondContainer}>
                <div className={square}>
                    Qualifield Doctors
                </div>
                <div className={square}>
                    Emergancy Crae
                </div>
                <div className={square}>
                    24 hour Services
                </div>

            </div>

            </div>
        </Layout>

    )
}
