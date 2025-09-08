import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { getSortedPostsData, titleToKatex } from '../lib/posts';
import { getSortedProjectData } from '../lib/projects';
import { getSortedTeachingsData } from '../lib/teaching';
import Date from '../components/date';
import { motion } from 'framer-motion';
import { vi } from 'date-fns/locale';
import { useState } from 'react';
import { set } from 'date-fns';


export async function getStaticProps() {

  let allPostsData = getSortedPostsData();
  let allProjectData = getSortedProjectData();
  let allTeachingData = getSortedTeachingsData();

  for (let postData of allPostsData) {
    postData.title = await titleToKatex(postData.title);
  }

  for (let projectData of allProjectData) {
    projectData.title = await titleToKatex(projectData.title);
  }

  for (let teachingData of allTeachingData) {
    teachingData.title = await titleToKatex(teachingData.title);
  }

  return {
    props: {
      allTeachingData,
    },
  };
}

export default function Home({ allTeachingData }) {

  let presentations = [
    {title: "Amortized Locally Decodable Codes for Insertions and Deletions", venue: ["ITC 2025"], id: "insDelaLDC", linksText: ["Conference Ver.","arXiv"], links: ["https://drops.dagstuhl.de/entities/document/10.4230/LIPIcs.ITC.2025.1","https://arxiv.org/abs/2507.03141"], authors: "Jeremiah Blocki and Justin Zhang"},
    {title: "Amortized Locally Decodable Codes", venue: ["ISIT 2025"], id: "aLDC", linksText: ["arXiv"], links: ["https://arxiv.org/abs/2502.10538"], authors: "Jeremiah Blocki and Justin Zhang"},
    {title: "Secure Convertible Codes", venue: ["ISIT 2025"], linksText: ["Preprint", "Master's Thesis"], links: ["/papers/SecureConvertibleCodesFull.pdf", "http://reports-archive.adm.cs.cmu.edu/anon/2024/CMU-CS-24-160.pdf"], authors: "Justin Zhang and  K.V. Rashmi"}
                      ]
  
  const [hovered, setHovered] = useState(false);
  return (
     <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <motion.div 
        onHoverStart={() => {setHovered(true)}}
        onHoverEnd={() => {setHovered(false)}}
        transition={{ duration: 0.5 }}
      >

      <section className={utilStyles.headingXl}>
          <motion.span
            animate={{ opacity: 1, color: hovered ? ['#e3dbdb','#C41230'] : ['#C41230','#e3dbdb'] , transition: {duration: 1}}}
          >
            J
          </motion.span ><motion.span animate={{color: hovered ? ['#e3dbdb','#000000'] : ['#000000','#e3dbdb'], transition: {duration: 1}}}>ustin </motion.span>
          
          <motion.span
            initial={{ color: "white"}}
            animate={{ color: hovered ? ['#e3dbdb','#cfb991'] : ['#cfb991','#e3dbdb'], transition: {duration: 1} }}
           
          >
            Z
          </motion.span><motion.span animate={{ color: hovered ? ['#e3dbdb','#000000'] : ['#000000','#e3dbdb'], transition: {duration: 1} }}>hang </motion.span>
          </section> 

      </motion.div>

      <section className={utilStyles.paragraphVert}>
        <p className={utilStyles.phone}>
        Email: zhan3554 [at] purdue.edu
         
        </p>

        <p className={utilStyles.phone}><a href='/docs/cv.pdf'>My CV</a></p>
        
        <p className={utilStyles.p}>
          Hi! I am a second year CS PhD student at Purdue University advised by  <a href="https://www.cs.purdue.edu/homes/jblocki/">Jeremiah Blocki</a>. I am thankful to be supported in part by the 
          <a href="https://www.purdue.edu/newsroom/archive/purduetoday/releases/2023/Q2/purdue-invests-in-graduate-student-stipends,-raising-minima-and-launching-presidential-doctoral-excellence-awards.html"><i> Presidential Doctoral Excellence Award </i> </a>
          and the <a href="https://www.bobherbold.com/"><i> Herbold Fellowship</i></a>.
          
        </p>

        <p className={utilStyles.p}>
         I am interested in several problems within the intersection of coding theory and cryptography. 
         My broad objective is to understand what the fundamental trade-offs between statistical/computational security and fault tolerance are.
         I am currently investigating how we can use cryptography to construct codes with improved rate, distance, and other relevant parameters beyond those known for worst-case assumptions.
        </p>

        <p className={utilStyles.p}>
        Previously, I completed my computer science BS and MS at Carnegie Mellon University (2019-2024), where I was advised by <a href='https://www.cs.cmu.edu/~rvinayak/#group'>Rashmi Vinayak</a>.
        </p>
          
      </section>



      <section className={`${utilStyles.headingLg}`}> Research
        <section className={`${utilStyles.listItemFormat}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
          <ul className={utilStyles.list}>
            {presentations.map(({ title,venue,linksText,links,id,authors}) => (
              <li className={utilStyles.listItem} key={id}>
                <i>{title}</i>
                  <p></p>
                  
                <small className={utilStyles.lightText}> {authors}</small>
                  <p></p>
                
                <small className={utilStyles.lightText}> {venue.map((v) => v + ". ")} 
                    
                    {links.map((link, i) => (
                      <span key={i}>
                        <Link href={link} dangerouslySetInnerHTML={{__html: linksText[i]}} />
                        {i < links.length - 1 && <span>&nbsp;&nbsp;</span>}
                      </span>
                    ))}
                </small>
              </li>
            ))}
          </ul>
        </section>
      </section>
      


      {<section className={`${utilStyles.headingLg}`}> Teaching Assistant Materials
        <section className={`${utilStyles.listItemFormatWider}`}>
        <div className={utilStyles.blockshit}>&nbsp;</div>
          <ul className={utilStyles.list}>
            {allTeachingData
              .filter(({ semester }) => semester === "Fall 2025")
              .map(({ id, title, semester }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/teaching/${id}`} dangerouslySetInnerHTML={{ __html: title }}/>
                  <p></p>
                  {semester}
                </li>
              ))}
          </ul>
        </section>
      </section>}
      
    </Layout>);

}

