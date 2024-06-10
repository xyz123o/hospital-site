import * as React from "react"
import Layout from "../components/Layout"
import { container,content ,image,title,buttonDiv} from "../styles/home.module.css"
export default function Home() {  
  return (
    <Layout>
       <section className={container}>
      <div>
         <p className={content}>Welcome to MediCare+ Clinic</p>
         <div className={title}>Best Specialist</div>
         <p>
          We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.
          </p>
      
         <div className={buttonDiv}>   
         <div>
          <button>Make an Appoinment</button>
         </div>
         <div>
          <button>Despartments</button>
         </div>
         </div>
      </div> 
      <div className={image}>
      </div>     
     </section>
    </Layout>
     
  )
}
