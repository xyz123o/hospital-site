import * as React from "react"
import Layout from "../components/Layout"
import { newsContainer ,newstitle ,content} from "../styles/news.module.css"
export default function Home() {  
  return (
    <Layout>
       <div className={newsContainer}>
        <div>
            <h2 className={newstitle}>Subscribe to Newsletter</h2>
            <div className={content}>We have a wide experience design and strategy</div>
            <input type="email"/><span><button>Send Now</button></span>
        </div>
       </div>
    </Layout>
     
  )
}
